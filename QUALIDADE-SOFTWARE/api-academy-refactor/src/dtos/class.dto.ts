import { PaginationDTO } from '.';
import { StudentAuth } from '../utils';

export interface ListAllClassesInputDTO {
  limit?: number;
  page?: number;
  studentLogged: StudentAuth;
}

export interface ClassDTO {
  id: string;
  name: string;
  edition: string;
  startDate: Date;
  endDate: Date;
  isRegistered: boolean; // flag para indicar se o aluno logado esta matriculado nesta turma
  enrollments: number; // numero de matriculas da turma
}

export interface ListAllClassesOutputDTO {
  data: ClassDTO[];
  pagination: PaginationDTO;
}
