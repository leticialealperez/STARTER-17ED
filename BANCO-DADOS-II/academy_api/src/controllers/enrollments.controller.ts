import { Student } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaConnection } from '../database/prisma.connection';

export class EnrollmentsController {
  public static async create(req: Request, res: Response) {
    try {
      const { student, classId } = req.body;

      const classFound = await prismaConnection.class.findUnique({
        where: { id: classId, deleted: false },
      });

      if (!classFound) {
        return res.status(404).json({
          ok: false,
          message: 'Turma não encontrada',
        });
      }

      // um aluno não pode se matricular duas vezes na mesma turma
      const enrollmentFound = await prismaConnection.enrollment.findFirst({
        where: {
          studentId: (student as Student).id,
          classId,
        },
      });

      if (enrollmentFound) {
        return res.status(400).json({
          ok: false,
          message: 'Já possui matricula nesta turma.',
        });
      }

      const enrollmentCreated = await prismaConnection.enrollment.create({
        data: {
          classId,
          studentId: (student as Student).id,
        },
        include: {
          class: {
            select: {
              name: true,
            },
          },
          student: {
            select: {
              name: true,
            },
          },
        },
      });

      return res.status(201).json({
        ok: true,
        message: 'Matricula efetivada',
        data: enrollmentCreated,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }

  public static async list(req: Request, res: Response) {
    try {
      let { limit, page } = req.query;
      const { student } = req.body;

      let limitDefault = 10;
      let pageDefault = 1;

      if (limit) {
        limitDefault = Number(limit);
      }

      if (page) {
        pageDefault = Number(page);
      }

      const count = await prismaConnection.enrollment.count({
        where: {
          studentId: student.id,
        },
      });

      const enrollments = await prismaConnection.enrollment.findMany({
        skip: limitDefault * (pageDefault - 1),
        take: limitDefault,
        where: {
          studentId: student.id,
        },
        select: {
          id: true,
          situation: true,
          class: true,
        },
      });

      return res.status(200).json({
        ok: true,
        message: 'Matriculas listadas com sucesso',
        data: enrollments,
        pagination: {
          limit: limitDefault,
          page: pageDefault,
          count: count,
          totalPages: Math.ceil(count / limitDefault),
        },
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }
}
