import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { StudentService } from '../services';
import { onError } from '../utils';

export class StudentsController {
  public async create(req: Request, res: Response) {
    try {
      const { name, age, document, email, password, type } = req.body;

      const service = new StudentService();
      const student = await service.createStudent({
        age,
        cpf: document,
        email,
        name,
        password,
        type,
      });

      return res.status(201).json({
        ok: true,
        message: 'Aluno cadastrado com sucesso!',
        data: student,
      });
    } catch (err) {
      return onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;

      const service = new StudentService();
      const result = await service.listAllStudents({
        limit: limit ? Number(limit) : undefined,
        page: page ? Number(page) : undefined,
      });

      return res.status(200).json({
        ok: true,
        message: 'Alunos listados com sucesso',
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

      const service = new StudentService();
      const student = await service.getStudentById(id);

      return res.status(200).json({
        ok: true,
        message: 'Aluno encontrado',
        data: student,
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

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      const service = new StudentService();
      const studentUpdated = await service.updateStudent({
        id,
        age,
        name,
      });

      return res.status(200).json({
        ok: true,
        message: 'Aluno atualizado com sucesso',
        data: studentUpdated,
      });
    } catch (err) {
      return onError(err, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new StudentService();
      const studentDeleted = await service.deleteStudent(id);

      return res.status(200).json({
        ok: true,
        message: 'Aluno deletado com sucesso',
        data: studentDeleted,
      });
    } catch (err) {
      return onError(err, res);
    }
  }
}
