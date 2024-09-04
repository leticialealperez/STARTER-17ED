import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { AuthService } from '../services';

export class AuthController {
  private readonly service = new AuthService();

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await this.service.loginStudent({ email, password });

      return res.status(200).json({
        ok: true,
        message: 'Aluno autenticado',
        data: token,
      });
    } catch (err) {
      if (err instanceof HttpError) {
        return res.status(err.statusCode).json({
          ok: false,
          message: err.message,
        });
      }

      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }
}
