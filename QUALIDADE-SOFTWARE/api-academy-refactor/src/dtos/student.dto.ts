import { Student, StudentType } from '@prisma/client';
import { PaginationDTO } from './pagination.dto';

export interface CreateStudentDTO {
  cpf: string;
  email: string;
  password: string;
  name: string;
  age: number;
  type: StudentType;
}

export interface ListAllStudentsOutputDTO {
  data: Student[];
  pagination: PaginationDTO;
}

export interface ListAllStudentsInputDTO {
  limit?: number;
  page?: number;
}

export interface UpdateStudentDTO {
  id: string;
  name?: string;
  age?: number;
}
