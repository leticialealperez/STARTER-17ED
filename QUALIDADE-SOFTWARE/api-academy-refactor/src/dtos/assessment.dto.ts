import { Assessment } from '@prisma/client';
import { PaginationDTO } from '.';
import { StudentAuth } from '../utils';

export interface CreateAssessmentDTO {
  studentLogged: StudentAuth;
  title: string;
  rate: number;
  deadline: Date;
  registerForStudentId?: string;
}

export interface ListAllAssessmentInputDTO {
  limit?: number;
  page?: number;
  studentLogged: StudentAuth;
}

export interface ListAllAssessmentOutputDTO {
  data: Assessment[];
  pagination: PaginationDTO;
}

export interface GetAssessmentByIdDTO {
  studentLogged: StudentAuth;
  assessmentId: string;
}

export interface UpdateAssessmentDTO {
  studentLogged: StudentAuth;
  assessmentId: string;
  title?: string;
  rate?: number;
  deadline?: Date;
}

export interface DeleteAssessmentDTO {
  studentLogged: StudentAuth;
  assessmentId: string;
}
