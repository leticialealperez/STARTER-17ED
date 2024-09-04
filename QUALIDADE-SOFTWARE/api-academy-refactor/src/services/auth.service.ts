import prismaConnection from '../database/prisma.connection';
import { LoginStudentDTO } from '../dtos';
import { HttpError } from '../errors';
import { Bcrypt, JWT } from '../utils';

export class AuthService {
  public async loginStudent(input: LoginStudentDTO): Promise<string> {
    // 1: Deve existir um aluno com o email informado
    const studentFound = await prismaConnection.student.findUnique({
      where: { emailAddress: input.email, deleted: false },
    });

    if (!studentFound) {
      throw new HttpError('Credenciais inválidas', 401);
    }

    // 2: A senha informada deve dar match com a hash armazenada no DB
    const hash = studentFound.password;
    const bcrypt = new Bcrypt();
    const isPasswordMatch = await bcrypt.verify(hash, input.password);

    if (!isPasswordMatch) {
      throw new HttpError('Credenciais inválidas', 401);
    }

    // 3: Deve retornar o token (crachá) de autorização do aluno
    const jwt = new JWT();

    const token = jwt.generateToken({
      id: studentFound.id,
      name: studentFound.name,
      email: studentFound.emailAddress,
      type: studentFound.type,
    });

    return token;
  }
}
