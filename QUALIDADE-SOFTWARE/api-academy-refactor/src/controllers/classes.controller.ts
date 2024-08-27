import { Request, Response } from 'express';
import { prismaConnection } from '../database/prisma.connection';

export class ClassesController {
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

      const count = await prismaConnection.class.count({
        where: {
          deleted: false,
        },
      });

      const classes = await prismaConnection.class.findMany({
        skip: limitDefault * (pageDefault - 1),
        take: limitDefault,
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          deleted: false,
        },
        include: {
          enrollments: true,
        },
      });

      const classMapped = classes.map((c) => ({
        ...c,
        isRegistered: c.enrollments.some((e) => e.studentId === student.id),
        enrollments: c.enrollments.length,
      }));

      return res.status(200).json({
        ok: true,
        message: 'Turmas listadas com sucesso',
        data: classMapped,
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
