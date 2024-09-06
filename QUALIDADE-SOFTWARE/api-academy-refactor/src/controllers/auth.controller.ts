import { Request, Response } from 'express';
import { AuthService } from '../services';
import { onError } from '../utils';

export class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const service = new AuthService();
      const token = await service.loginStudent({ email, password });

      return res.status(200).json({
        ok: true,
        message: 'Aluno autenticado',
        data: token,
      });
    } catch (err) {
      return onError(err, res);
    }
  }
}
