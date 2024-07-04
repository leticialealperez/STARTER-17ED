import { isAxiosError } from "axios";
import { academyApi } from "./api.cliente-http";

export async function getAssessments(token: string) {
  try {
    const authToken = token.replaceAll('"', "");

    const resposta = await academyApi.get("/assessments", {
      headers: { Authorization: authToken },
    });

    return resposta.data;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao listar avaliações",
    };
  }
}
