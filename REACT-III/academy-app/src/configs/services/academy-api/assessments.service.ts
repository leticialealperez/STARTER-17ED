import { isAxiosError } from "axios";
import { academyApi } from "./client-http";
import { ResponseAPI } from "./response-api.interface";

export interface AssessmentAPI {
  id: string;
  title: string;
  rate: string;
  deadline: string; // "2024-08-08"
  deleted: boolean;
  createdAt: string; // "2024-08-08T03:48:78"
  updatedAt: string;
  deletedAt: string | null;
  studentId: string;
}

// DTO - data transfer object
export interface CreateAssessment {
  title: string;
  rate: number;
  deadline: string;
}

export interface DeleteAssessment {
  id: string;
}

export type UpdateAssessment = Partial<CreateAssessment> & DeleteAssessment;

export interface RequestAPI<Type> {
  token: string;
  body: Type;
}

// LISTAR TODAS
export async function getAllAssessmentService(
  token: string,
  limit?: number,
  page?: number,
): Promise<ResponseAPI<Array<AssessmentAPI>>> {
  try {
    const response = await academyApi.get("/assessments", {
      headers: {
        Authorization: token,
      },
      params: {
        limit: limit,
        page: page,
      }, // query params
    });

    return response.data;
  } catch (err) {
    if (isAxiosError(err)) {
      // Quando a api retorna qualquer tipo de erro
      return err.response?.data;
    }

    // Ou quando o dev codou errado
    return {
      ok: false,
      message: "Aconteceu um erro inesperado",
    };
  }
}

// CADASTRAR
export async function createAssessmentService(
  obj: RequestAPI<CreateAssessment>,
): Promise<ResponseAPI<AssessmentAPI>> {
  try {
    const response = await academyApi.post(
      "/assessments",
      {
        title: obj.body.title,
        rate: obj.body.rate,
        deadline: obj.body.deadline,
      },
      {
        headers: {
          Authorization: obj.token,
        },
      },
    );

    return response.data;
  } catch (err) {
    if (isAxiosError(err)) {
      // Quando a api retorna qualquer tipo de erro
      return err.response?.data;
    }

    // Ou quando o dev codou errado
    return {
      ok: false,
      message: "Aconteceu um erro inesperado",
    };
  }
}

// ATUALIZAR
export async function updateAssessmentService(
  obj: RequestAPI<UpdateAssessment>,
): Promise<ResponseAPI<AssessmentAPI>> {
  try {
    const response = await academyApi.put(
      `/assessments/${obj.body.id}`,
      {
        title: obj.body.title,
        rate: obj.body.rate,
        deadline: obj.body.deadline,
      },
      {
        headers: {
          Authorization: obj.token,
        },
      },
    );

    return response.data;
  } catch (err) {
    if (isAxiosError(err)) {
      // Quando a api retorna qualquer tipo de erro
      return err.response?.data;
    }

    // Ou quando o dev codou errado
    return {
      ok: false,
      message: "Aconteceu um erro inesperado",
    };
  }
}

// DELETAR
export async function deleteAssessmentService(
  obj: RequestAPI<DeleteAssessment>,
): Promise<ResponseAPI<AssessmentAPI>> {
  try {
    const response = await academyApi.delete(`/assessments/${obj.body.id}`, {
      headers: {
        Authorization: obj.token,
      },
    });

    return response.data;
  } catch (err) {
    if (isAxiosError(err)) {
      // Quando a api retorna qualquer tipo de erro
      return err.response?.data;
    }

    // Ou quando o dev codou errado
    return {
      ok: false,
      message: "Aconteceu um erro inesperado",
    };
  }
}
