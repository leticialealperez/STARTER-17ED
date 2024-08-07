import { isAxiosError } from "axios";
import { academyApi } from "./client-http";

interface ResponseAPI<Type> {
  ok: boolean;
  message: string;
  data?: Type;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// ESTADOS DE UMA PROMISE - aquela função/rotina que acontece de forma assincrona - fora do ciclo de execução normal
// pending   - ESTA EM PROCESSAMENTO/PENDENTE
// fulfilled - OK/RESOLVIDA
// reject    - NÃO-OK/RECUSADA

// função de login
export async function loginService(email: string, password: string): Promise<ResponseAPI<string>> {
  // tratamento de erros
  try {
    // Quando a api retorna 200 ..299 - SUCESSO
    const response = await academyApi.post("/auth/login", {
      email: email,
      password: password,
    });

    return response.data;
  } catch (err: unknown) {
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

// função de logout
