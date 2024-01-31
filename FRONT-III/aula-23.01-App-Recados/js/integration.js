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
async function getRecados(token) {
  try {

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const resposta = await axiosClient.get("/messages", config);
    return resposta.data
  } catch (error) {
    return error.response.data;
  }
}

// Cadastro de recados
async function postRecado(token, descricao, detalhamento) {
  try {
    const dados = {
      description: descricao,
      detail: detalhamento
    }

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const resposta = await axiosClient.post('/messages', dados, config);
    return resposta.data;
  } catch (error) {
    return error.response.data;
  }
}

// Atualização de recados
async function putRecado(token, id, descricao, detalhamento) {
  try {
    const dados = {
      description: descricao,
      detail: detalhamento
    }

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const resposta = await axiosClient.put(`/messages/${id}`, dados, config);
    return resposta.data;
  } catch (error) {
    return error.response.data;
  }
}

// Exclusão de recados
async function deleteRecado(token, id) {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const resposta = await axiosClient.delete(`/messages/${id}`, config);
    return resposta.data;
  } catch (error) {
    return error.response.data;
  }
}
