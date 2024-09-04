import { Request, Response } from 'express';
import { HttpError } from '../errors';
import { StudentService } from '../services';

export class StudentsController {
  // propriedade privada e apenas leitura (equivalente à uma const)
  private readonly service: StudentService = new StudentService();

  public async create(req: Request, res: Response) {
    try {
      const { name, age, document, email, password, type } = req.body;

      const student = await this.service.createStudent({
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
      return this.onError(err, res);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;

      const result = await this.service.listAllStudents({
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
      return this.onError(err, res);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const student = await this.service.getStudentById(id);

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

      const studentUpdated = await this.service.updateStudent({
        id,
        age,
        name,
      });

      return res.status(200).json({
        ok: true,
        message: 'Aluno atualizado',
        data: studentUpdated,
      });
    } catch (err) {
      return this.onError(err, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const studentDeleted = await this.service.deleteStudent(id);

      return res.status(200).json({
        ok: true,
        message: 'Aluno deletado com sucesso',
        data: studentDeleted,
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
