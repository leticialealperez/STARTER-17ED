import { NextFunction, Request, Response } from 'express';
import { validate as validateUUID } from 'uuid';
import { ErrorNotification } from '../../errors';

export class CreateEnrollmentMiddleware {
  public static validateMissingFields(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { classId } = req.body;

    const notifications: Array<ErrorNotification> = [];

    if (typeof classId === 'undefined') {
      notifications.push({ field: 'classId', message: 'Campo obrigatório' });
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

  public static validateFieldTypes(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { classId } = req.body;

    const notifications: Array<ErrorNotification> = [];

    if (typeof classId !== 'string') {
      notifications.push({ field: 'classId', message: 'Dado inválido' });
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

  public static validateFieldsValue(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { classId } = req.body;

    const notifications: Array<ErrorNotification> = [];

    if (!validateUUID(classId)) {
      notifications.push({
        field: 'classId',
        message: 'Formato de identificador de turma inválido',
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
