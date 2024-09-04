import { HttpError } from '../../../src/errors';
import { StudentService } from '../../../src/services';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from './mock/student.mock';
/*

1ª Arrange - Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar, inicializamos variáveis, criamos alguns test doubles como Mocks ou Spies dentre outras coisas.

2ª Act - Esta etapa é onde rodamos de fato o nosso teste. Chamamos alguma função ou método que queremos por a prova.

3ª Assert - Esta etapa é onde faremos nosso assert. É onde verificamos se a operação realizada na etapa anterior (Act) surtiu o resultado esperado. Assim sabemos se o teste passa ou falha.

*/

const fakeListStudents = StudentMock.buildFakeListStudents(11);

describe('Testes de unidade para o método createStudent', () => {
  test('Deve lançar uma exceção se não existir nenhum aluno cadastrado', async () => {
    // Arrange - Preparar o teste
    prismaMock.student.count.mockResolvedValue(0);
    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = sut.listAllStudents({});

    // Assert  - Verificar as asserções
    expect(result).rejects.toThrow(
      new HttpError('Nenhum aluno encontrado', 404),
    );
  });

  test('Deve listar os últimos 10 alunos cadastrados quando parametros de paginação estiverem ausentes', async () => {
    // Arrange - Preparar o teste
    const limitDefault = 10;
    const pageDefault = 1;
    const fakeListFirstPage = [...fakeListStudents].splice(
      limitDefault * (pageDefault - 1),
      limitDefault,
    );
    prismaMock.student.count.mockResolvedValue(fakeListStudents.length);
    prismaMock.student.findMany.mockResolvedValue(fakeListFirstPage);

    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = await sut.listAllStudents({});

    // Assert  - Verificar as asserções
    expect(result.pagination).toEqual({
      limit: limitDefault,
      page: pageDefault,
      count: fakeListStudents.length,
      totalPages: Math.ceil(fakeListStudents.length / limitDefault),
    });
    expect(result.data).toEqual(fakeListFirstPage);
  });

  test('Deve listar conforme parametros de paginação', async () => {
    // Arrange - Preparar o teste
    const limitToSet = 5;
    const pageToSet = 2;
    const fakeListOfPage = [...fakeListStudents].splice(
      limitToSet * (pageToSet - 1),
      limitToSet,
    );
    prismaMock.student.count.mockResolvedValue(fakeListStudents.length);
    prismaMock.student.findMany.mockResolvedValue(fakeListOfPage);

    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = await sut.listAllStudents({
      limit: limitToSet,
      page: pageToSet,
    });

    // Assert  - Verificar as asserções
    expect(result.pagination).toEqual({
      limit: limitToSet,
      page: pageToSet,
      count: fakeListStudents.length,
      totalPages: Math.ceil(fakeListStudents.length / limitToSet),
    });
    expect(result.data).toEqual(fakeListOfPage);
  });
});
