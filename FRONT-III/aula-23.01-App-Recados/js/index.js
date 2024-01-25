const modalCadastrar = new bootstrap.Modal('#modalCadastrar');

document.getElementById('form-cadastro').addEventListener('submit', async (evento) => {
    evento.preventDefault();

    if (!evento.target.checkValidity()) {
        evento.stopPropagation();
        evento.target.classList.add('was-validated');
        return
    }

    const dados = {
        email: evento.target.email.value,
        password: evento.target.password.value
    }

    // antes de disparar a requisição
    loading(true, 'cadastro-usuario');

    setTimeout(() => {
        loading(false, 'cadastro-usuario');

        if (dados.email == 'leticia@teste.com') {
            alertCadastro(true, 'E-mail já cadastrado por outro usuário.');
            return
        }

        evento.target.reset();
        alertCadastro(false);
        modalCadastrar.hide();
        notificacao('Usuário cadastrado com sucesso!', 'success');
        evento.target.classList.remove('was-validated');
    }, 5000);
});


document.getElementById('form-login').addEventListener('submit', async (evento) => {
    evento.preventDefault();

    if (!evento.target.checkValidity()) {
        evento.stopPropagation();
        evento.target.classList.add('was-validated');
        return
    }

    const dados = {
        email: evento.target['email-login'].value,
        password: evento.target['password-login'].value
    }

    loading(true, 'login-usuario');

    // depois de receber a resposta da requisição
    setTimeout(() => {
        loading(false, 'login-usuario');

        if (dados.email != 'leticia@teste.com') {
            notificacao('Credenciais inválidas', 'danger');
            return
        }

        evento.target.reset();
        notificacao('Login realizado com sucesso', 'success');
        evento.target.classList.remove('was-validated');
    }, 5000);
});





