import request from 'supertest';
import { createServer } from '../../../src/server/express.server';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from '../../services/students/mock/student.mock';

describe('GET /students', () => {
  const server = createServer();

  test('Should be return 400 if parameters of pagination is provided and have invalid type', async () => {
    const invalidParameters = {
      limit: 'invalid_limit',
      page: 'invalid_page',
    };

    const result = await request(server)
      .get('/students')
      .query(invalidParameters)
      .send();

    expect(result.statusCode).toBe(400);
    expect(result.body.ok).toBe(false);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors).toHaveLength(2);
  });

  test('Should be return 404 if no one student registered', async () => {
    prismaMock.student.count.mockResolvedValue(0);
    const result = await request(server).get('/students').send();

    expect(result.statusCode).toBe(404);
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe('Nenhum aluno encontrado');
  });

  test('Should be return 200 if list students successfuly with default values pagination', async () => {
    const limitDefault = 10;
    const pageDefault = 1;
    const studentsFake = [
      StudentMock.buildFakeStudent(),
      StudentMock.buildFakeStudent(),
    ];
    prismaMock.student.count.mockResolvedValue(studentsFake.length);
    prismaMock.student.findMany.mockResolvedValue(studentsFake);

    const result = await request(server).get('/students').send();

    expect(result.statusCode).toBe(200);
    expect(result.body.ok).toBe(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body).toHaveProperty('pagination');
    expect(result.body.data).toEqual(studentsFake);
    expect(result.body.pagination).toEqual({
      limit: limitDefault,
      page: pageDefault,
      count: studentsFake.length,
      totalPages: Math.ceil(studentsFake.length / limitDefault),
    });
  });

  test('Should be return 200 if list students successfuly with defined values pagination', async () => {
    const limit = 1;
    const page = 2;
    const studentsFake = [
      StudentMock.buildFakeStudent('F'),
      StudentMock.buildFakeStudent('M'),
    ];
    const studentsSecondPage = [...studentsFake].splice(
      limit * (page - 1),
      limit,
    );
    prismaMock.student.count.mockResolvedValue(studentsFake.length);
    prismaMock.student.findMany.mockResolvedValue(studentsSecondPage);

    const result = await request(server)
      .get('/students')
      .query({ limit, page })
      .send();

    expect(result.statusCode).toBe(200);
    expect(result.body.ok).toBe(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body).toHaveProperty('pagination');
    expect(result.body.data).toEqual(studentsSecondPage);
    expect(result.body.pagination).toEqual({
      limit: limit,
      page: page,
      count: studentsFake.length,
      totalPages: Math.ceil(studentsFake.length / limit),
    });
  });
});
