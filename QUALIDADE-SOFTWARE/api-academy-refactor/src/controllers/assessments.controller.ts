import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { AssessmentService } from '../services';

export class AssessmentsController {
  private readonly service = new AssessmentService();

  public async create(req: Request, res: Response) {
    try {
      const { student, title, rate, deadline, studentId } = req.body;

      const assessmentCreated = await this.service.createAssessment({
        deadline,
        rate,
        studentLogged: student,
        title,
        registerForStudentId: studentId,
      });

      return res.status(201).json({
        ok: true,
        message: 'Avaliação cadastrada com sucesso',
        data: assessmentCreated,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const result = await this.service.listAllAssessments({
        studentLogged: student,
        limit: limit ? Number(limit) : undefined,
        page: page ? Number(page) : undefined,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliações listadas com sucesso',
        data: result.data,
        pagination: result.pagination,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { student } = req.body;

      const assessment = await this.service.getAssessmentById({
        studentLogged: student,
        assessmentId: id,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliação encontrada com sucesso',
        data: assessment,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, rate, deadline, student } = req.body;

      const assessmentUpdated = await this.service.updateAssessment({
        assessmentId: id,
        studentLogged: student,
        deadline: deadline ? new Date(deadline) : undefined,
        rate,
        title,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliação atualizada com sucesso',
        data: assessmentUpdated,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { student } = req.body;

      const assessmentDeleted = await this.service.deleteAssessment({
        assessmentId: id,
        studentLogged: student,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliação deletada com sucesso',
        data: assessmentDeleted,
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
