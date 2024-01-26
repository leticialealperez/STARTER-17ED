const modalCadastrar = new bootstrap.Modal('#modalCadastrar');

document.getElementById('form-cadastro').addEventListener('submit', async (evento) => {
    // remover o comportamento de reload
    evento.preventDefault();

    // verificar se o formulário está inválido
    const formularioValido = evento.target.checkValidity();
    if (!formularioValido) {
        // executa aqui quando o formulario não for válido
        evento.stopPropagation();
        evento.target.classList.add('was-validated')
        return
    }

    // criar a variável que irá armazenar os dados do usuário
    const novoUsuario = {
        email: evento.target.email.value,
        password: evento.target.password.value,
    }

    // antes de disparar a requisição à APÌ
    loading(true, 'cadastro-usuario');

    // chamar a API e aguardar a resposta
    const resposta = await signup(novoUsuario.email, novoUsuario.password);

    // desabilito o loading
    loading(false, 'cadastro-usuario');

    // se a resposta da API for erro:
    // 1 - Mostrar alerta
    // 2 - Parar a função
    if (resposta.success === false) {
        alertCadastro(true, resposta.message);
        return
    }

    // Se a resposta da API for sucesso:
    // 1 - Resetar o formulario
    evento.target.reset();

    // 2 - Remover alerta do modal
    alertCadastro(false);

    // 3 - Remover a classe de validação do formulário do modal
    evento.target.classList.remove('was-validated')

    // 4 - Fechar o modal
    modalCadastrar.hide();

    // 5 - Mostrar Toast de notificação de sucesso
    notificacao(resposta.message, 'success');
});


document.getElementById('form-login').addEventListener('submit', async (evento) => {
    evento.preventDefault();


});





