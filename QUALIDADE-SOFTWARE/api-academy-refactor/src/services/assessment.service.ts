import { Assessment } from '@prisma/client';
import { StudentService } from '.';
import prismaConnection from '../database/prisma.connection';
import {
  CreateAssessmentDTO,
  DeleteAssessmentDTO,
  GetAssessmentByIdDTO,
  ListAllAssessmentInputDTO,
  ListAllAssessmentOutputDTO,
  UpdateAssessmentDTO,
} from '../dtos';
import { HttpError } from '../errors';

export class AssessmentService {
  private readonly studentService = new StudentService();

  public async createAssessment(
    input: CreateAssessmentDTO,
  ): Promise<Assessment> {
    // REGRA: Deve existir o aluno se informado registerForStudentId
    if (input.registerForStudentId) {
      await this.studentService.getStudentById(input.registerForStudentId);
    }

    // REGRA: Deve cadastrar a avaliação conforme parametros recebidos
    const assessmentCreated = await prismaConnection.assessment.create({
      data: {
        deadline: input.deadline,
        rate: input.rate,
        title: input.title,
        studentId: input.registerForStudentId ?? input.studentLogged.id,
      },
    });

    return assessmentCreated;
  }

  public async listAllAssessments(
    input: ListAllAssessmentInputDTO,
  ): Promise<ListAllAssessmentOutputDTO> {
    // REGRA: Deve buscar apenas as avaliações pertencentes ao aluno logado se o mesmo for do tipo M ou F
    // REGRA: Deve buscar as avaliações de todos os aluno se o aluno logado for do tipo T
    const studentId =
      input.studentLogged.type !== 'T' ? input.studentLogged.id : undefined;

    // REGRA: Deve retornar um erro se não encontrar nenhuma avaliação cadastrada
    const count = await prismaConnection.assessment.count({
      where: { studentId, deleted: false },
    });

    if (count === 0) {
      throw new HttpError('Nenhuma avaliação encontrada', 404);
    }

    // REGRA: Deve listar as avaliações conforme parametros de paginação recebidos ou conforme definições de paginação padrão
    let limit = 10;
    let page = 1;

    if (input.limit) {
      limit = Number(input.limit);
    }

    if (input.page) {
      page = Number(input.page);
    }

    const assessments = await prismaConnection.assessment.findMany({
      where: { studentId, deleted: false },
      orderBy: { createdAt: 'desc' },
      skip: limit * (page - 1),
      take: limit,
    });

    return {
      data: assessments,
      pagination: {
        count,
        limit,
        page,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  public async getAssessmentById(
    input: GetAssessmentByIdDTO,
  ): Promise<Assessment> {
    // REGRA: Deve buscar apenas a avaliação pertencente ao aluno logado se o mesmo for do tipo M ou F
    // REGRA: Deve buscar a avaliação de qualquer aluno se o aluno logado for do tipo T
    const studentId =
      input.studentLogged.type !== 'T' ? input.studentLogged.id : undefined;

    const assessmentFound = await prismaConnection.assessment.findUnique({
      where: {
        id: input.assessmentId,
        studentId,
        deleted: false,
      },
    });

    // REGRA: Deve retornar um erro se não encontrar a avaliação
    if (!assessmentFound) {
      throw new HttpError('Avaliação não encontrada', 404);
    }

    return assessmentFound;
  }

  public async updateAssessment(
    input: UpdateAssessmentDTO,
  ): Promise<Assessment> {
    // REGRA: Deve retornar um erro se não encontrar a avaliação pelo ID
    const assessmentFound = await this.getAssessmentById({
      assessmentId: input.assessmentId,
      studentLogged: input.studentLogged,
    });

    // REGRA: Deve atualizar o registro com os dados corretos
    const assessmentUpdated = await prismaConnection.assessment.update({
      where: { id: assessmentFound.id },
      data: {
        title: input.title ?? assessmentFound.title,
        rate: input.rate ?? assessmentFound.rate,
        deadline: input.deadline ?? assessmentFound.deadline,
      },
    });

    return assessmentUpdated;
  }

  public async deleteAssessment(
    input: DeleteAssessmentDTO,
  ): Promise<Assessment> {
    // REGRA: Deve retornar um erro se não encontrar a avaliação pelo ID
    const assessmentFound = await this.getAssessmentById({
      assessmentId: input.assessmentId,
      studentLogged: input.studentLogged,
    });

    // REGRA: Deve realizar o soft-delete com o ID correto
    const assessmentDeleted = await prismaConnection.assessment.update({
      where: { id: assessmentFound.id },
      data: { deleted: true, deletedAt: new Date() },
    });

    return assessmentDeleted;
  }
}
