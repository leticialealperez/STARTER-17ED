import { isAxiosError } from "axios";
import { academyApi, ResponseAPI } from "../api.cliente-http";
import { SignUpRequestBody, Student } from './students.types';


export async function signUp(data: SignUpRequestBody) {
  try {
    const resposta = await academyApi.post("/students", data);

    return resposta.data as ResponseAPI<Student>;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar cadastro",
    };
  }
}
