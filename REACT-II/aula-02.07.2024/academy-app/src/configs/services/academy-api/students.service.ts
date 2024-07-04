import { isAxiosError } from "axios";
import { academyApi } from "./api.cliente-http";

interface SignUpData {
  name: string;
  document: string;
  age: number;
  email: string;
  password: string;
}

export interface ResponseAuthAPI {
  ok: boolean;
  message: string;
  authToken?: string;
}

export async function signUp(signUpData: SignUpData) {
  try {
    const resposta = await academyApi.post("/students", signUpData);

    return resposta.data as ResponseAuthAPI;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response?.data as ResponseAuthAPI;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar cadastro",
    };
  }
}
