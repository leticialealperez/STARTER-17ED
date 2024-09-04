import { StudentService } from '../../../src/services';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from './mock/student.mock';
/*

1ª Arrange - Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar, inicializamos variáveis, criamos alguns test doubles como Mocks ou Spies dentre outras coisas.

2ª Act - Esta etapa é onde rodamos de fato o nosso teste. Chamamos alguma função ou método que queremos por a prova.

3ª Assert - Esta etapa é onde faremos nosso assert. É onde verificamos se a operação realizada na etapa anterior (Act) surtiu o resultado esperado. Assim sabemos se o teste passa ou falha.

*/

const fakeStudent = StudentMock.buildFakeStudent();

describe('Testes de unidade para o método emailAlreadyRegistered', () => {
  test('Deve retornar false se o email não existir', async () => {
    // Arrange - Preparar o teste
    prismaMock.student.findUnique.mockResolvedValue(null);
    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = await sut.emailAlreadyRegistered('any_email');

    // Assert  - Verificar as asserções
    expect(result).toBe(false);
  });

  test('Deve retornar true se o email existir', async () => {
    // Arrange - Preparar o teste
    prismaMock.student.findUnique.mockResolvedValue(fakeStudent);
    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = await sut.emailAlreadyRegistered('any_email');

    // Assert  - Verificar as asserções
    expect(result).toBe(true);
  });
});
