import { Enrollment } from '@prisma/client';
import { ClassService } from '.';
import prismaConnection from '../database/prisma.connection';
import {
  CreateEnrollmentDTO,
  EnrollmentDTO,
  ListAllEnrollmentsInputDTO,
  ListAllEnrollmentsOutpurDTO,
} from '../dtos';
import { HttpError } from '../errors';

export class EnrollmentService {
  private readonly classService = new ClassService();

  public async createEnrollment(
    input: CreateEnrollmentDTO,
  ): Promise<Enrollment> {
    // REGRA: a turma deve existir
    const classFound = await this.classService.getClassById(input.classId);

    // REGRA: Um aluno não pode se matricular duas vezes na mesma turma
    const enrollmentFound = await prismaConnection.enrollment.findFirst({
      where: {
        studentId: input.studentLogged.id,
        classId: classFound.id,
      },
    });

    if (enrollmentFound) {
      throw new HttpError('Já possui matricula nesta turma', 400);
    }

    const enrollmentCreated = await prismaConnection.enrollment.create({
      data: { classId: classFound.id, studentId: input.studentLogged.id },
    });

    return enrollmentCreated;
  }

  public async listAllEnrollments(
    input: ListAllEnrollmentsInputDTO,
  ): Promise<ListAllEnrollmentsOutpurDTO> {
    const studentId =
      input.studentLogged.type !== 'T' ? input.studentLogged.id : undefined;

    const count = await prismaConnection.enrollment.count({
      where: { studentId },
    });

    if (count === 0) {
      throw new HttpError('Nenhuma matricula encontrada', 404);
    }

    let limit = 10;
    let page = 1;

    if (input.limit) {
      limit = Number(input.limit);
    }

    if (input.page) {
      page = Number(input.page);
    }

    const enrollments = await prismaConnection.enrollment.findMany({
      skip: limit * (page - 1),
      take: limit,
      where: { studentId },
      include: {
        class: true,
        student: true,
      },
    });

    const enrollmentsMapped: EnrollmentDTO[] = enrollments.map((e) => ({
      id: e.id,
      situation: e.situation,
      class: {
        id: e.class.id,
        name: e.class.name,
      },
      student: {
        id: e.student.id,
        name: e.student.name,
      },
    }));

    return {
      data: enrollmentsMapped,
      pagination: {
        limit,
        page,
        count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }
}
