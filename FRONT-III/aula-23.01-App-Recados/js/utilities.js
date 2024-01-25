// Spinner Loading
function loading(mostrar, contexto) {
    const btn = document.getElementById(`btn-${contexto}`);
    let textoBotao = '';

    switch (contexto) {
        case 'login-usuario':
            textoBotao = 'Login';
            break;
        case 'cadastro-usuario':
            textoBotao = 'Confirmar';
            break;
        case 'cadastro-recado':
            textoBotao = 'Cadastrar';
            break;
        case 'atualizao-recado':
            textoBotao = 'Atualizar';
            break;
        case 'exclusao-recado':
            textoBotao = 'Excluir';
            break;
        default:
    }


    if (mostrar) {
        btn.setAttribute('disabled', 'true');

        btn.innerHTML = `
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Carregando...</span>
        `
    } else {
        btn.removeAttribute('disabled');
        btn.innerHTML = textoBotao;
    }
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

// Alert de cadastro de usuário
function alertCadastro(show, mensagem) {
    const feedbackCadastroContainer = document.getElementById('container-feedback');

    if (show) {
        feedbackCadastroContainer.innerHTML = '';

        const alert = document.createElement('div');
        alert.innerHTML = `
            <div class="alert alert-danger alert-dismissible" role="alert">
                <div>
                    <i class="bi bi-x-lg"></i>
                    ${mensagem}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar Alerta"></button>
            </div>
        `;

        feedbackCadastroContainer.appendChild(alert);
    } else {
        feedbackCadastroContainer.innerHTML = '';
    }

}