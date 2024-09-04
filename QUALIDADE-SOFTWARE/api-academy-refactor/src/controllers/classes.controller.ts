import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { ClassService } from '../services';

export class ClassesController {
  private readonly service = new ClassService();

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const result = await this.service.listAllClasses({
        studentLogged: student,
        limit: limit ? Number(limit) : undefined,
        page: page ? Number(page) : undefined,
      });

      return res.status(200).json({
        ok: true,
        message: 'Turmas listadas com sucesso',
        data: result.data,
        pagination: result.pagination,
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
