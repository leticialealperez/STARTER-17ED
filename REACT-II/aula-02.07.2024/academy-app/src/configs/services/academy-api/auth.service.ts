import { isAxiosError } from 'axios';
import { academyApi } from './api.cliente-http';

interface Credentials {
    email: string;
    password: string;
}

interface ResponseAuthAPI {
    ok: boolean;
    message: string;
    authToken?: string;
}

export async function login(credentials: Credentials) {
    try {
        const resposta = await academyApi.post('/auth/login', credentials);

        return resposta.data as ResponseAuthAPI;
    } catch(err: unknown) {

       if(isAxiosError(err)) {
        return err.response?.data as ResponseAuthAPI;
       }

       console.log(err);
       return {
            ok: false,
            message: "Erro ao realizar login"
       }
    }
}