import { HttpError } from '../../../src/errors';
import { StudentService } from '../../../src/services';
import { Bcrypt } from '../../../src/utils';
import { prismaMock } from '../../config/prisma.mock';
import { StudentMock } from './mock/student.mock';
/*

1ª Arrange - Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar, inicializamos variáveis, criamos alguns test doubles como Mocks ou Spies dentre outras coisas.

2ª Act - Esta etapa é onde rodamos de fato o nosso teste. Chamamos alguma função ou método que queremos por a prova.

3ª Assert - Esta etapa é onde faremos nosso assert. É onde verificamos se a operação realizada na etapa anterior (Act) surtiu o resultado esperado. Assim sabemos se o teste passa ou falha.

*/

const fakeStudent = StudentMock.buildFakeStudent();
const fakeCreateStudentDto = StudentMock.buildFakeCreateStudentDTO();

describe('Testes de unidade para o método createStudent', () => {
  test('Deve lançar uma exceção se o email já tiver sido cadastrado', async () => {
    // Arrange - Preparar o teste
    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(true);

    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = sut.createStudent(fakeCreateStudentDto);

    // Assert  - Verificar as asserções
    expect(result).rejects.toThrow(new HttpError('E-mail já cadastrado', 400));
  });

  test('Deve lançar uma exceção se o CPF já tiver sido cadastrado', async () => {
    // Arrange - Preparar o teste
    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(false);
    jest
      .spyOn(StudentService.prototype, 'cpfAlreadyRegistered')
      .mockResolvedValue(true);

    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = sut.createStudent(fakeCreateStudentDto);

    // Assert  - Verificar as asserções
    expect(result).rejects.toThrow(new HttpError('CPF já cadastrado', 400));
  });

  test('Deve salvar e retornar o aluno cadastrado', async () => {
    // Arrange - Preparar o teste
    jest
      .spyOn(StudentService.prototype, 'emailAlreadyRegistered')
      .mockResolvedValue(false);
    jest
      .spyOn(StudentService.prototype, 'cpfAlreadyRegistered')
      .mockResolvedValue(false);
    jest
      .spyOn(Bcrypt.prototype, 'generateHash')
      .mockResolvedValue('top_secret_hash');
    prismaMock.student.create.mockResolvedValue(fakeStudent);

    const sut = new StudentService();

    // Act     - Rodar o teste
    const result = await sut.createStudent(fakeCreateStudentDto);

    // Assert  - Verificar as asserções
    expect(result).toEqual(fakeStudent);
  });
});
