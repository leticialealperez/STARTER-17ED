import { EnrollmentSituation } from '@prisma/client';
import { PaginationDTO } from '.';
import { StudentAuth } from '../utils';

export interface CreateEnrollmentDTO {
  studentLogged: StudentAuth;
  classId: string;
}

export interface ListAllEnrollmentsInputDTO {
  limit?: number;
  page?: number;
  studentLogged: StudentAuth;
}

export interface EnrollmentDTO {
  id: string;
  situation: EnrollmentSituation;
  student: {
    id: string;
    name: string;
  };
  class: {
    id: string;
    name: string;
  };
}

export interface ListAllEnrollmentsOutpurDTO {
  data: EnrollmentDTO[];
  pagination: PaginationDTO;
}
