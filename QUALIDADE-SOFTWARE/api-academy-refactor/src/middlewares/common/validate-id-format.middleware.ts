import { NextFunction, Request, Response } from 'express';
import { validate as validateUUID } from 'uuid';
import { ErrorNotification } from '../../errors';

export class ValidateIdFormatMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const notifications: Array<ErrorNotification> = [];

    if (!validateUUID(id)) {
      notifications.push({
        field: 'id',
        message: 'Formato de parâmetro inválido',
      });
    }

    if (notifications.length) {
      return res.status(400).json({
        ok: false,
        message: 'Requisição inválida',
        errors: notifications,
      });
    }

    return next();
  }
}
