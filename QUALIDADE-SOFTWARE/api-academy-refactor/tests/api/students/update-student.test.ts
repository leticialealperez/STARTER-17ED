import { randomUUID } from 'crypto';
import request from 'supertest';
import { HttpError } from '../../../src/errors';
import { createServer } from '../../../src/server/express.server';
import { StudentService } from '../../../src/services';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from '../../services/students/mock/student.mock';

describe('PUT /students/:id', () => {
  const server = createServer();

  test('deve retornar 400 se o parametro não for um uuid', async () => {
    // Given
    const invalidUid = 'abc';

    // When
    const result = await request(server).put(`/students/${invalidUid}`).send();

    // Then
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body).toHaveProperty('errors');
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe('Requisição inválida');
    expect(result.body.errors).toHaveLength(1);
    expect(result.body.errors[0]).toEqual({
      field: 'id',
      message: 'Formato de parâmetro inválido',
    });
  });

  test('deve retornar 400 se o tipo dos dados enviados forem inválidos', async () => {
    // Given
    const validUid = randomUUID();
    const invalidBody = {
      name: 123,
      age: 'abc',
    };

    // When
    const result = await request(server)
      .put(`/students/${validUid}`)
      .send(invalidBody);

    // Then
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body).toHaveProperty('errors');
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe('Requisição inválida');
    expect(result.body.errors).toHaveLength(2);
    expect(result.body.errors[0]).toEqual({
      field: 'name',
      message: 'Dado inválido',
    });
    expect(result.body.errors[1]).toEqual({
      field: 'age',
      message: 'Dado inválido',
    });
  });

  test('deve retornar 400 se o valor dos dados enviados forem inválidos', async () => {
    // Given
    const validUid = randomUUID();
    const invalidBody = {
      name: 'ab',
      age: 17,
    };

    // When
    const result = await request(server)
      .put(`/students/${validUid}`)
      .send(invalidBody);

    // Then
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body).toHaveProperty('errors');
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe('Requisição inválida');
    expect(result.body.errors).toHaveLength(2);
    expect(result.body.errors[0]).toEqual({
      field: 'name',
      message: 'Nome deve conter no mínimo 3 caracteres',
    });
    expect(result.body.errors[1]).toEqual({
      field: 'age',
      message: 'Não são aceitos alunos menores de 18 anos',
    });
  });

  test('deve retornar 404 se o registro do aluno não existir', async () => {
    // Given
    const validUid = randomUUID();
    const validBody = {
      name: 'Outro Nome',
      age: 18,
    };
    jest
      .spyOn(StudentService.prototype, 'getStudentById')
      .mockRejectedValue(new HttpError('Aluno não encontrado', 404));

    // When
    const result = await request(server)
      .put(`/students/${validUid}`)
      .send(validBody);

    // Then
    expect(result.statusCode).toBe(404);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe('Aluno não encontrado');
  });

  test('deve retornar 500 quando tiver um erro de servidor', async () => {
    // Given
    const validUid = randomUUID();
    const validBody = {
      name: 'Outro Nome',
      age: 18,
    };
    jest
      .spyOn(StudentService.prototype, 'getStudentById')
      .mockResolvedValue(StudentMock.buildFakeStudent());
    prismaMock.student.update.mockRejectedValue(new Error('Prisma Error'));

    // When
    const result = await request(server)
      .put(`/students/${validUid}`)
      .send(validBody);

    // Then
    expect(result.statusCode).toBe(500);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toContain('Ocorreu um erro inesperado');
  });

  test('deve retornar 200 quando o aluno for atualizado com sucesso', async () => {
    // Given
    const validUid = randomUUID();
    const validBody = {
      name: 'Outro Nome',
      age: 18,
    };
    const studentToUpdate = StudentMock.buildFakeStudent();
    const studentUpdated = {
      ...studentToUpdate,
      name: validBody.name,
      age: validBody.age,
    };
    jest
      .spyOn(StudentService.prototype, 'getStudentById')
      .mockResolvedValue(studentToUpdate);
    prismaMock.student.update.mockResolvedValue(studentUpdated);

    // When
    const result = await request(server)
      .put(`/students/${validUid}`)
      .send(validBody);

    // Then
    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty('ok');
    expect(result.body).toHaveProperty('message');
    expect(result.body).toHaveProperty('data');
    expect(result.body.ok).toBe(true);
    expect(result.body.message).toContain('Aluno atualizado com sucesso');
    expect(result.body.data).toEqual(studentUpdated);
  });
});
