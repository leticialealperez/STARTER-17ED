import { isAxiosError } from "axios";
import { academyApi, ResponseAPI } from '../api.cliente-http';
import { Credentials } from './auth.types';

export async function login(credentials: Credentials) {
  try {
    const resposta = await academyApi.post("/auth/login", credentials);

    return resposta.data as ResponseAPI<string>;
  } catch (err: unknown) {

    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar login",
    };
  }
}
