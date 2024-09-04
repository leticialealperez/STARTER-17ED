import { Class } from '@prisma/client';
import prismaConnection from '../database/prisma.connection';
import {
  ClassDTO,
  ListAllClassesInputDTO,
  ListAllClassesOutputDTO,
} from '../dtos';
import { HttpError } from '../errors';

export class ClassService {
  public async listAllClasses(
    input: ListAllClassesInputDTO,
  ): Promise<ListAllClassesOutputDTO> {
    const count = await prismaConnection.class.count({
      where: { deleted: false },
    });

    if (count === 0) {
      throw new HttpError('Nenhuma turma encontrada', 404);
    }

    let limit = 10;
    let page = 1;

    if (input.limit) {
      limit = Number(input.limit);
    }

    if (input.page) {
      page = Number(input.page);
    }

    const classes = await prismaConnection.class.findMany({
      skip: limit * (page - 1),
      take: limit,
      orderBy: { createdAt: 'desc' },
      where: { deleted: false },
      include: { enrollments: true },
    });

    const classesMapped: ClassDTO[] = classes.map((c) => ({
      id: c.id,
      name: c.name,
      edition: c.edition,
      startDate: c.startDate,
      endDate: c.endDate,
      isRegistered: c.enrollments.some(
        (e) => e.studentId === input.studentLogged.id,
      ),
      enrollments: c.enrollments.length,
    }));

    return {
      data: classesMapped,
      pagination: {
        limit,
        page,
        count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  public async getClassById(id: string): Promise<Class> {
    const classFound = await prismaConnection.class.findUnique({
      where: { id },
    });

    if (!classFound) {
      throw new HttpError('Turma não encontrada', 404);
    }

    return classFound;
  }
}
