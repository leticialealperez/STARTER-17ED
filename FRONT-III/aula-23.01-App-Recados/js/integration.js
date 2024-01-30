const axiosClient = axios.create({
  baseURL: "https://api-recados-growdev-6f4s.onrender.com",
});

// Login usuário
async function signin(email, password) {
  try {
    const dados = {
      email: email,
      password: password,
    };

    const resposta = await axiosClient.post("/signin", dados);
    return resposta.data

  } catch (error) {
    return error.response.data;
  }
}

// Cadastro usuário
async function signup(email, password) {
  try {
    const dados = {
      email: email,
      password: password,
    };
    const resposta = await axiosClient.post("/signup", dados);
    return resposta.data;
  } catch (error) {
    return error.response.data;
  }
}

// Listagem de recados

// Cadastro de recados

// Atualização de recados

// Exclusão de recados
