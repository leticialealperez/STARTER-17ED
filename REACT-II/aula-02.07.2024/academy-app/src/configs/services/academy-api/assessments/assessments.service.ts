import { isAxiosError } from "axios";
import { academyApi, ResponseAPI } from "../api.cliente-http";
import { Assessment, CreateAssessmentRequestBody, DeleteAssessmentRequestParams, ListAllRequestParams, UpdateAssessmentRequestBody } from './assessments.types';

export async function getAssessments(params: ListAllRequestParams) {
  try {
    const authToken = params.token.replaceAll('"', "");

    const resposta = await academyApi.get("/assessments", {
      headers: { 
        Authorization: authToken 
      },
      params: {
        limit: params.limit,
        page: params.page
      }
    });

    return resposta.data as ResponseAPI<Assessment[]>;
  } catch (err: unknown) {

    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao listar avaliações",
    };
  }
}

export async function createAssessment(data: CreateAssessmentRequestBody) {
  try {
    const authToken = data.token.replaceAll('"', "");

    const response = await academyApi.post("/assessments", data, {
      headers: { Authorization: authToken }
    });

    return response.data as ResponseAPI<Assessment>
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao cadastrar avaliação",
    };
  }
}

export async function updateAssessment(data: UpdateAssessmentRequestBody) {
  try {
    const authToken = data.token.replaceAll('"', "");
    
    const response = await academyApi.put(`/assessments/${data.assessmentId}`, data, {
      headers: { Authorization: authToken }
    });

    return response.data as ResponseAPI<Assessment>;

  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao atualizar a avaliação",
    };
  }
}

export async function deleteAssessment(data: DeleteAssessmentRequestParams) {
  try {
     const authToken = data.token.replaceAll('"', "");
    
    const response = await academyApi.delete(`/assessments/${data.assessmentId}`, {
      headers: { Authorization: authToken }
    });

    return response.data as ResponseAPI<Assessment>;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao excluir a avaliação",
    };
  }
}
