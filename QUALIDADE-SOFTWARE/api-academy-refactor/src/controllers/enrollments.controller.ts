import { Request, Response } from 'express';
import { EnrollmentService } from '../services';
import { onError } from '../utils';

export class EnrollmentsController {
  public async create(req: Request, res: Response) {
    try {
      const { student, classId } = req.body;

      const service = new EnrollmentService();
      const enrollmentCreated = await service.createEnrollment({
        classId,
        studentLogged: student,
      });

      return res.status(201).json({
        ok: true,
        message: 'Matricula efetivada',
        data: enrollmentCreated,
      });
    } catch (err) {
      return onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const service = new EnrollmentService();
      const result = await service.listAllEnrollments({
        studentLogged: student,
        limit: limit ? Number(limit) : undefined,
        page: page ? Number(page) : undefined,
      });

      return res.status(200).json({
        ok: true,
        message: 'Matriculas listadas com sucesso',
        data: result.data,
        pagination: result.pagination,
      });
    } catch (err) {
      return onError(err, res);
    }
  }
}
