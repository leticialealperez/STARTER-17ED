import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { EnrollmentService } from '../services';

export class EnrollmentsController {
  private readonly service = new EnrollmentService();

  public async create(req: Request, res: Response) {
    try {
      const { student, classId } = req.body;

      const enrollmentCreated = await this.service.createEnrollment({
        classId,
        studentLogged: student,
      });

      return res.status(201).json({
        ok: true,
        message: 'Matricula efetivada',
        data: enrollmentCreated,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const result = await this.service.listAllEnrollments({
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
      return this.onError(err, res);
    }
  }

  // Para não precisar ficar repetindo a todo momento este bloco no catch dos métodos
  private onError(err: unknown, response: Response): Response {
    if (err instanceof HttpError) {
      return response.status(err.statusCode).json({
        ok: false,
        message: err.message,
      });
    }

    return response.status(500).json({
      ok: false,
      message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
        (err as Error).message
      }`,
    });
  }
}
