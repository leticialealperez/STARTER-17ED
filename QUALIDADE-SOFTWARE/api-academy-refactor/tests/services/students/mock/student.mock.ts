import { Student } from '@prisma/client';
import { cpf } from 'cpf-cnpj-validator';
import { randomUUID } from 'crypto';
import { CreateStudentDTO } from '../../../../src/dtos';

export class StudentMock {
  public static buildFakeStudent(type?: 'T' | 'M' | 'F'): Student {
    return {
      id: randomUUID(),
      name: 'João da Silva',
      age: 28,
      documentIdentification: cpf.generate(false),
      emailAddress: 'joao@mock.com',
      password: 'top_secret_hash',
      type: type ?? 'T',
      deleted: false,
      createdAt: new Date().toISOString() as unknown as Date,
      updatedAt: new Date().toISOString() as unknown as Date,
      deletedAt: null,
    };
  }

  public static buildFakeCreateStudentDTO(
    type?: 'T' | 'M' | 'F',
  ): CreateStudentDTO {
    return {
      name: 'João da Silva',
      age: 28,
      cpf: cpf.generate(false),
      email: 'joao@mock.com',
      password: 'topSecret',
      type: type ?? 'T',
    };
  }

  public static buildFakeListStudents(lengthList: number): Student[] {
    const students: Student[] = [];

    for (let i = 1; i <= lengthList; i++) {
      students.push(this.buildFakeStudent());
    }

    return students;
  }
}
