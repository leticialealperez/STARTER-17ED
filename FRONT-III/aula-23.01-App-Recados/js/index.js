const modalCadastrar = new bootstrap.Modal("#modalCadastrar");

// ROTINA CADASTRO DE USUARIO
document
  .getElementById("form-cadastro")
  .addEventListener("submit", async (evento) => {
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
document
  .getElementById("form-login")
  .addEventListener("submit", async (evento) => {
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
    const credenciaisUsuario = {
      email: evento.target["email-login"].value,
      password: evento.target["password-login"].value,
    };

    // antes de disparar a requisição à APÌ
    loading(true, "login-usuario");

    // chamar a API e aguardar a resposta
    const resposta = await signin(
      credenciaisUsuario.email,
      credenciaisUsuario.password
    );

    // desabilito o loading
    loading(false, "login-usuario");

    // se a resposta da API for erro:
    // 1 - Mostrar alerta
    // 2 - Parar a função
    if (resposta.success === false) {
      alertCadastro(true, resposta.message);
      return;
    }

    // se a resposta da API for sucesso:
    // 1 -  Mostrar Toast de notificação de sucesso
    notificacao(resposta.message, "success");

    // 2 - Resetar o formulario
    evento.target.reset();

    // 3 - Remover a classe de validação do formulário do modal
    evento.target.classList.remove("was-validated");

    // 4 - salvar o token do meu usuário no localstorage (API)
    // setItem - salvar esse dado no local Storage
    // getItem - pega o dado do local Storage
    // JSON.stringify - traduzir pro navegador o retorno da API(JSON), ele é o FARMACEUTICO
    // JSON.parse - traduz de volta
    localStorage.setItem("token", resposta.data.token);

    // com o atraso de 1.5s, navega pra página home
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  });

// ROTINA DE VERIFICAÇÃO SE USUÁRIO JÁ ESTÁ LOGADO
document.addEventListener("DOMContentLoaded", () => {
  // Buscar a chave "token" no local Storage
  const token = localStorage.getItem("token");

  // Se a busca pelo token resultar em um valor diferente de null ou diferente de string vazia
  // mostra o toast com uma mensagem
  // envia pra minha página home
  if (token !== null && token !== "") {
    notificacao('Login automático. Redirecionando...', 'success');

    setTimeout(() => {
      window.location.href = 'home.html'
    }, 1500);
  }
});
