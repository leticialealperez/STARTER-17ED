import { cpf } from 'cpf-cnpj-validator';
import request from 'supertest';
import { createServer } from '../../../src/server/express.server';
import { StudentService } from '../../../src/services';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from '../../services/students/mock/student.mock';

describe('POST /students', () => {
  const server = createServer();

  test('Shold be return 400 if required fields is missing', async () => {
    const emptyBody = {};

    const result = await request(server).post('/students').send(emptyBody);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(6);
  });

  test('Shold be return 400 if fields have invalid type', async () => {
    const invalidBody = {
      name: 123,
      age: 'abc',
      email: 123,
      document: 123,
      password: 123,
      type: 123,
    };

    const result = await request(server).post('/students').send(invalidBody);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(6);
  });

  test('Shold be return 400 if fields have invalid value', async () => {
    const invalidBody = {
      name: 'ab',
      age: 17,
      email: 'invalid_email',
      document: 'invalid_document',
      password: 'abc',
      type: 'invalid_type',
    };

    const result = await request(server).post('/students').send(invalidBody);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(6);
  });

  test('Shold be return 400 if email already registered', async () => {
    const validBody = {
      name: 'any_name',
      age: 18,
      email: 'email@email.com',
      document: cpf.generate(),
      password: 'any_password',
      type: 'T',
    };

    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(true);

    const result = await request(server).post('/students').send(validBody);

    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('E-mail já cadastrado');
  });

  test('Shold be return 400 if cpf already registered', async () => {
    const validBody = {
      name: 'any_name',
      age: 18,
      email: 'email@email.com',
      document: cpf.generate(),
      password: 'any_password',
      type: 'T',
    };

    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(false);
    jest
      .spyOn(StudentService.prototype, 'cpfAlreadyRegistered')
      .mockResolvedValue(true);

    const result = await request(server).post('/students').send(validBody);

    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('CPF já cadastrado');
  });

  test('Shold be return 201 if student created', async () => {
    const fakeStudent = StudentMock.buildFakeStudent();

    const validBody = {
      name: fakeStudent.name,
      age: fakeStudent.age,
      email: fakeStudent.emailAddress,
      document: fakeStudent.documentIdentification,
      password: fakeStudent.password,
      type: fakeStudent.type,
    };

    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(false);
    jest
      .spyOn(StudentService.prototype, 'cpfAlreadyRegistered')
      .mockResolvedValue(false);
    prismaMock.student.create.mockResolvedValue(fakeStudent);

    const result = await request(server).post('/students').send(validBody);

    expect(result.statusCode).toBe(201);
    expect(result.body.ok).toBe(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toEqual(fakeStudent);
  });

  test('Shold be return 500 if throws unknown exception', async () => {
    const validBody = {
      name: 'any_name',
      age: 18,
      email: 'email@email.com',
      document: cpf.generate(),
      password: 'any_password',
      type: 'T',
    };

    jest
      .spyOn(StudentService.prototype, 'createStudent')
      .mockRejectedValue(new Error('unknown_error'));

    const result = await request(server).post('/students').send(validBody);

    expect(result.statusCode).toBe(500);
    expect(result.body.message).toContain('Ocorreu um erro inesperado');
  });
});
