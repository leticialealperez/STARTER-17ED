import { NextFunction, Request, Response } from 'express';
import { JWT } from '../../utils/jwt.util';

export class AuthMiddleware {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const headers = req.headers;

    if (!headers.authorization) {
      return res.status(401).json({
        ok: false,
        message: 'Token é obrigatório',
        errors: [],
      });
    }

    const jwt = new JWT();
    const payload = jwt.decodedToken(headers.authorization);

    if (!payload) {
      return res.status(401).json({
        ok: false,
        message: 'Usuário não autenticado',
        errors: [],
      });
    }

    req.body.student = payload;

    return next();
  }
}
