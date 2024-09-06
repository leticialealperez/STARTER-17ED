import request from 'supertest';
import { createServer } from '../../../src/server/express.server';
import { AuthService } from '../../../src/services';
import { Bcrypt, JWT } from '../../../src/utils';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from '../../services/students/mock/student.mock';

describe('POST /login', () => {
  const server = createServer();

  test('Deve retornar 400 quando dados obrigatórios ausentes', async () => {
    // Given
    const emptyBody = {};

    // When
    const result = await request(server).post('/auth/login').send(emptyBody);

    // Then
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(2);
  });

  test('Deve retornar 400 quando os dados tiverem tipo inválido', async () => {
    // Given
    const invalidBody = {
      email: 123,
      password: 123,
    };

    // When
    const result = await request(server).post('/auth/login').send(invalidBody);

    // Then
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(2);
  });

  test('Deve retornar 401 quando email inválido', async () => {
    // Given
    const fakeStudent = StudentMock.buildFakeStudent();
    const invalidCredentials = {
      email: 'any_email',
      password: fakeStudent.password,
    };
    prismaMock.student.findUnique.mockResolvedValue(null);

    // When
    const result = await request(server)
      .post('/auth/login')
      .send(invalidCredentials);

    // Then
    expect(result.statusCode).toBe(401);
    expect(result.body.message).toBe('Credenciais inválidas');
  });

  test('Deve retornar 401 quando password inválido', async () => {
    // Given
    const fakeStudent = StudentMock.buildFakeStudent();
    const invalidCredentials = {
      email: fakeStudent.emailAddress,
      password: 'invalid_password',
    };
    prismaMock.student.findUnique.mockResolvedValue(fakeStudent);
    jest.spyOn(Bcrypt.prototype, 'verify').mockResolvedValue(false);

    // When
    const result = await request(server)
      .post('/auth/login')
      .send(invalidCredentials);

    // Then
    expect(result.statusCode).toBe(401);
    expect(result.body.message).toBe('Credenciais inválidas');
  });

  test('Deve retornar 200 quando email e password válidos', async () => {
    // Given
    const fakeStudent = StudentMock.buildFakeStudent();
    const credentials = {
      email: fakeStudent.emailAddress,
      password: 'valid_password',
    };
    const jwt = new JWT();
    const fakeToken = jwt.generateToken({
      id: fakeStudent.id,
      email: fakeStudent.emailAddress,
      name: fakeStudent.name,
      type: fakeStudent.type,
    });

    prismaMock.student.findUnique.mockResolvedValue(fakeStudent);
    jest.spyOn(Bcrypt.prototype, 'verify').mockResolvedValue(true);
    jest.spyOn(JWT.prototype, 'generateToken').mockReturnValue(fakeToken);

    // When
    const result = await request(server).post('/auth/login').send(credentials);

    // Then
    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toBe(fakeToken);
  });

  test('Deve retornar 500 quando lançada alguma exceção inesperada', async () => {
    // Given
    const credentials = {
      email: 'any_email',
      password: 'any_password',
    };
    jest
      .spyOn(AuthService.prototype, 'loginStudent')
      .mockRejectedValue(new Error('any_error'));

    // When
    const result = await request(server).post('/auth/login').send(credentials);

    // Then
    expect(result.statusCode).toBe(500);
    expect(result.body.message).toContain('Ocorreu um erro inesperado');
  });
});
