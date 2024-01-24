const modalCadastrar = new bootstrap.Modal('#modalCadastrar');

const formularioCadastro = document.getElementById('form-cadastro');
formularioCadastro.addEventListener('submit', async (evento) => {
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
    feedbackSignup('Carregando... Aguarde!', 'info', 'bi-arrow-repeat');

    const respostaAPI = await signup(dados.email, dados.password);

    // depois de receber a resposta da requisição
    if (!respostaAPI.success) {
        feedbackSignup(respostaAPI.message, 'danger', 'bi-x-lg');
        return
    }

    evento.target.reset();
    modalCadastrar.hide();
    notificacao(respostaAPI.message, 'success');
    evento.target.classList.remove('was-validated');

});

const formularioLogin = document.getElementById('form-login');
formularioLogin.addEventListener('submit', async (evento) => {
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

    loadingLogin(true);
    const respostaAPI = await signin(dados.email, dados.password);

    // depois de receber a resposta da requisição
    loadingLogin(false);

    if (!respostaAPI.success) {
        notificacao(respostaAPI.message, 'danger');
        return
    }

    evento.target.reset();
    notificacao(respostaAPI.message, 'success');
    evento.target.classList.remove('was-validated');

    console.log(respostaAPI.data);
})


// Alert de cadastro de usuário
function feedbackSignup(mensagem, tipo, icone) {
    const feedbackCadastroContainer = document.getElementById('container-feedback');
    feedbackCadastroContainer.innerHTML = '';

    const alert = document.createElement('div');
    alert.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible" role="alert">
            <div>
                <i class="bi ${icone}"></i>
                ${mensagem}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar Alerta"></button>
        </div>
    `;
    feedbackCadastroContainer.appendChild(alert);

    // sumir com o alerta automaticamente após 5segundos
    setTimeout(() => {
        feedbackCadastroContainer.innerHTML = '';
    }, 5000)

}

// Toast de notificação
function notificacao(mensagem, tipo) {
    const container = document.getElementById('containerToastNotificacao');
    container.innerHTML = `
        <div class="toast align-items-center text-bg-${tipo}" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${mensagem}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

    const toastNotificacao = new bootstrap.Toast('#toast');
    toastNotificacao.show();
}

function loadingLogin(show) {
    const btnLogin = document.getElementById('btn-login');

    if (show) {
        btnLogin.setAttribute('disabled', 'true');

        btnLogin.innerHTML = `
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Carregando...</span>
        `
    } else {
        btnLogin.removeAttribute('disabled');
        btnLogin.innerHTML = `Login`;
    }


}





