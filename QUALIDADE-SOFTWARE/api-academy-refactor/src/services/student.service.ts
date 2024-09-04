import { Student } from '@prisma/client';
import prismaConnection from '../database/prisma.connection';
import {
  CreateStudentDTO,
  ListAllStudentsInputDTO,
  ListAllStudentsOutputDTO,
  UpdateStudentDTO,
} from '../dtos';
import { HttpError } from '../errors';
import { Bcrypt } from '../utils';

export class StudentService {
  public async createStudent(input: CreateStudentDTO): Promise<Student> {
    const emailExists = await this.emailAlreadyRegistered(input.email);

    if (emailExists) {
      throw new HttpError('E-mail já cadastrado', 400);
    }

    const documentExists = await this.cpfAlreadyRegistered(input.email);

    if (documentExists) {
      throw new HttpError('CPF já cadastrado', 400);
    }

    // 3 - A senha deve ser encriptada antes de ser salva no DB
    const bcrypt = new Bcrypt();
    const passwordHashed = await bcrypt.generateHash(input.password);

    // 4 - salva o novo aluno
    const newStudent = await prismaConnection.student.create({
      data: {
        name: input.name,
        age: input.age,
        type: input.type,
        password: passwordHashed,
        documentIdentification: input.cpf,
        emailAddress: input.email,
      },
    });

    return newStudent;
  }

  public async listAllStudents(
    input: ListAllStudentsInputDTO,
  ): Promise<ListAllStudentsOutputDTO> {
    const count = await prismaConnection.student.count({
      where: {
        deleted: false,
      },
    });

    if (count === 0) {
      throw new HttpError('Nenhum aluno encontrado', 404);
    }

    let limitDefault = 10;
    let pageDefault = 1;

    if (input.limit) {
      limitDefault = Number(input.limit);
    }

    if (input.page) {
      pageDefault = Number(input.page);
    }

    const students = await prismaConnection.student.findMany({
      skip: limitDefault * (pageDefault - 1),
      take: limitDefault,
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        deleted: false,
      },
    });

    return {
      data: students,
      pagination: {
        limit: limitDefault,
        page: pageDefault,
        count: count,
        totalPages: Math.ceil(count / limitDefault),
      },
    };
  }

  public async getStudentById(id: string): Promise<Student> {
    const studentFound = await prismaConnection.student.findUnique({
      where: {
        id: id,
        deleted: false,
      },
    });

    if (!studentFound) {
      throw new HttpError('Aluno não encontrado', 404);
    }

    return studentFound;
  }

  public async updateStudent(input: UpdateStudentDTO): Promise<Student> {
    const studentFound = await this.getStudentById(input.id);

    const studentUpdated = await prismaConnection.student.update({
      where: {
        id: studentFound.id,
      },
      data: {
        name: input.name || studentFound.name,
        age: input.age || studentFound.age,
      },
    });

    return studentUpdated;
  }

  public async deleteStudent(id: string): Promise<Student> {
    const studentFound = await this.getStudentById(id);

    const studentDeleted = await prismaConnection.student.update({
      where: { id: studentFound.id },
      data: { deleted: true, deletedAt: new Date() },
    });

    return studentDeleted;
  }

  public async emailAlreadyRegistered(email: string): Promise<boolean> {
    const studentFound = await prismaConnection.student.findUnique({
      where: { emailAddress: email },
    });

    return studentFound ? true : false;
  }

  public async cpfAlreadyRegistered(cpf: string): Promise<boolean> {
    const studentFound = await prismaConnection.student.findUnique({
      where: { documentIdentification: cpf },
    });

    return studentFound ? true : false;
  }
}
