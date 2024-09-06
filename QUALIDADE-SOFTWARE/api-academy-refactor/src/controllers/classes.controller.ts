import { Request, Response } from 'express';
import { ClassService } from '../services';
import { onError } from '../utils';

export class ClassesController {
  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const service = new ClassService();
      const result = await service.listAllClasses({
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
      return onError(err, res);
    }
  }
}
