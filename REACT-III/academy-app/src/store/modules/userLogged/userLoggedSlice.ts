import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import { loginService } from "../../../configs/services/auth.service";

interface Credentials {
  email: string;
  password: string;
}

export const fetchLogin = createAsyncThunk("userLogged/login", async (credentials: Credentials) => {
  // lógica de chamada ao service e toda validação necessária antes de setar o estado de userLogged
  const result = await loginService(credentials.email, credentials.password);

  return {
    isLogged: result.ok,
    authToken: result.data ?? "",
    emailUser: result.ok ? credentials.email : "",
    message: result.message,
  };
});

export interface UserLoggedState {
  logged: boolean;
  authToken: string;
  emailUser: string;
}

const initialState: UserLoggedState = {
  logged: false,
  authToken: "",
  emailUser: "",
};

const userLoggedSlice = createSlice({
  name: "user-logged",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /*
        builder.addCase(login.pending, (state, action) => {
        // toda lógica de modificação de user-logged para quando a requisição estiver sendo processada (carregando)
        });
    */

    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      // toda lógica de modificação de user-logged para quando a requisição estiver terminar de ser processada
      state.logged = action.payload.isLogged; // isso aqui é pra mostrar que não precisa ser exatamente os mesmos nomes de props do estado
      state.authToken = action.payload.authToken;
      state.emailUser = action.payload.emailUser;

      enqueueSnackbar(action.payload.message, {
        variant: action.payload.isLogged ? "success" : "error",
      });
    });

    /*
        builder.addCase(login.rejected, (state, action) => {
            // aqui executa somente se a lógica do thunk estourar uma exceção
        });
    */
  },
});

export const userLoggedReducer = userLoggedSlice.reducer;
