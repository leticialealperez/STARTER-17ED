const modalCadastrar = new bootstrap.Modal("#modalCadastrar");

// ROTINA CADASTRO DE USUARIO
document.getElementById("form-cadastro").addEventListener("submit", async (evento) => {
  // remover o comportamento de reload
  evento.preventDefault();

  // verificar se o formulário está inválido
  const formularioValido = evento.target.checkValidity();
  if (!formularioValido) {
    // executa aqui quando o formulario não for válido
    evento.stopPropagation();
    evento.target.classList.add("was-validated");
    return;
  }

  // criar a variável que irá armazenar os dados do usuário
  const novoUsuario = {
    email: evento.target.email.value,
    password: evento.target.password.value,
  };

  // antes de disparar a requisição à APÌ
  loading(true, "cadastro-usuario");

  // chamar a API e aguardar a resposta
  const resposta = await signup(novoUsuario.email, novoUsuario.password);

  // desabilito o loading
  loading(false, "cadastro-usuario");

  // se a resposta da API for erro:
  // 1 - Mostrar alerta
  // 2 - Parar a função
  if (resposta.success === false) {
    alertCadastro(true, resposta.message);
    return;
  }

  // Se a resposta da API for sucesso:
  // 1 - Resetar o formulario
  evento.target.reset();

  // 2 - Remover alerta do modal
  alertCadastro(false);

  // 3 - Remover a classe de validação do formulário do modal
  evento.target.classList.remove("was-validated");

  // 4 - Fechar o modal
  modalCadastrar.hide();

  // 5 - Mostrar Toast de notificação de sucesso
  notificacao(resposta.message, "success");
});

// ROTINA LOGIN DE USUÁRIOS
document.getElementById("form-login").addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const formularioValido = evento.target.checkValidity();
  if (!formularioValido) {
    evento.stopPropagation();
    evento.target.classList.add("was-validated");
    return;
  }

  const credenciaisUsuario = {
    email: evento.target["email-login"].value,
    password: evento.target["password-login"].value,
  };

  loading(true, "login-usuario");

  const resposta = await signin(
    credenciaisUsuario.email,
    credenciaisUsuario.password
  );

  loading(false, "login-usuario");

  if (resposta.success === false) {
    notificacao(resposta.message, "danger");
    return;
  }

  notificacao(resposta.message, "success");
  evento.target.reset();
  evento.target.classList.remove("was-validated");

  localStorage.setItem("token", JSON.stringify(resposta.data.token));

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
});


// ROTINA DE VERIFICAÇÃO SE USUÁRIO JÁ ESTÁ LOGADO
document.addEventListener("DOMContentLoaded", () => {
  const token = getToken();

  if (token !== null && token !== "") {
    notificacao('Login automático. Redirecionando...', 'success');

    setTimeout(() => {
      window.location.href = 'home.html'
    }, 1500);
  }
});
