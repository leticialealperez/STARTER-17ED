import { StudentType } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export class NotEnrolledMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { student } = req.body;

    if (student.type === StudentType.M) {
      return res.status(400).json({
        ok: false,
        message: 'Recurso indisponível para aluno Matriculado',
      });
    }

    return next();
  }
}
