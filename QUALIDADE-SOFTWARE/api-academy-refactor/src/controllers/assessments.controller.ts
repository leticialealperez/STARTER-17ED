import { Request, Response } from 'express';
import { AssessmentService } from '../services';
import { onError } from '../utils';

export class AssessmentsController {
  public async create(req: Request, res: Response) {
    try {
      const { student, title, rate, deadline, studentId } = req.body;

      const service = new AssessmentService();
      const assessmentCreated = await service.createAssessment({
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
      return onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      const service = new AssessmentService();
      const result = await service.listAllAssessments({
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
      return onError(err, res);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { student } = req.body;

      const service = new AssessmentService();
      const assessment = await service.getAssessmentById({
        studentLogged: student,
        assessmentId: id,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliação encontrada com sucesso',
        data: assessment,
      });
    } catch (err) {
      return onError(err, res);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, rate, deadline, student } = req.body;

      const service = new AssessmentService();
      const assessmentUpdated = await service.updateAssessment({
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
      return onError(err, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { student } = req.body;

      const service = new AssessmentService();
      const assessmentDeleted = await service.deleteAssessment({
        assessmentId: id,
        studentLogged: student,
      });

      return res.status(200).json({
        ok: true,
        message: 'Avaliação deletada com sucesso',
        data: assessmentDeleted,
      });
    } catch (err) {
      return onError(err, res);
    }
  }
}
