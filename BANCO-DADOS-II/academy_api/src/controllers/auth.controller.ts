import { Request, Response } from 'express';
import { prismaConnection } from '../database/prisma.connection';
import { Bcrypt } from '../utils/bcrypt.util';
import { JWT } from '../utils/jwt.util';

export class AuthController {
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // verificar o email
      const studentFound = await prismaConnection.student.findUnique({
        where: {
          emailAddress: email,
        },
      });

      if (!studentFound) {
        return res.status(401).json({
          ok: false,
          message: 'Credencias inválidas',
        });
      }

      // verificar se a senha dá match
      const hash = studentFound.password;
      const bcrypt = new Bcrypt();
      const isPasswordMatch = await bcrypt.verify(hash, password);

      if (!isPasswordMatch) {
        return res.status(401).json({
          ok: false,
          message: 'Credencias inválidas',
        });
      }

      const jwt = new JWT();

      const token = jwt.generateToken({
        id: studentFound.id,
        name: studentFound.name,
        email: studentFound.emailAddress,
        type: studentFound.type,
      });

      return res.status(200).json({
        ok: true,
        message: 'Aluno autenticado',
        data: token,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }
}
