// CAPTURA DOS MODAIS DA PÁGINA
const modalLoading = new bootstrap.Modal('#modal-loading');
const modalAdd = new bootstrap.Modal('#modal-add-recado');
const modalAtualizar = new bootstrap.Modal('#modal-atualizar-recado');
const modalExcluir = new bootstrap.Modal('#modal-excluir-recado');

// LISTENER PARA CAPTURAR O SCROLL NA PÁGINA
window.addEventListener("scroll", () => {
  const scrolled = document.documentElement.scrollTop;
  const btn = document.getElementById("btn-voltar-topo");

  if (scrolled > 300) {
    btn.style = "display: inline;";
  } else {
    btn.style = "display: none;";
  }

});

// LISTENER PARA CAPTURAR O CLICK NO BOTÃO DE VOLTAR AO TOPO DA PÁGINA
document.getElementById("btn-voltar-topo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// LISTENER PARA CAPTURAR O CLICK NO BOTÃO DE SAIR
document.getElementById('btn-logout').addEventListener('click', () => {
  notificacao('Aguarde, redirecionando...', 'success');

  logout();
});

// LISTENER PARA CAPTURAR O CARREGAMENTO DA PÁGINA
document.addEventListener("DOMContentLoaded", async () => {
  let token = getToken();
  await listarRecados(token);
});

// LISTENER PARA CAPTURAR O SUBMIT DA FORMULARIO DE CADASTRO
document.getElementById('form-cadastro-recado').addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const novoRecado = {
    descricao: ev.target['descricao-novo-recado'].value,
    detalhamento: ev.target['detalhamento-novo-recado'].value
  }

  const token = getToken();

  loading(true, 'cadastro-recado');

  const resposta = await postRecado(token, novoRecado.descricao, novoRecado.detalhamento);

  loading(false, 'cadastro-recado');
  modalAdd.hide();

  if (resposta.success === false) {
    notificacao(resposta.message, 'danger');
    logout();
    return
  }

  notificacao(resposta.message, 'success');
  ev.target.reset();
  await listarRecados(token);
});

// ROTINA PARA LISTAR OS RECADOS DA API
async function listarRecados(token) {
  modalLoading.show();
  const resposta = await getRecados(token);
  modalLoading.hide();

  if (resposta.success === false) {
    notificacao(resposta.message, 'danger');
    logout();

    return;
  }

  montarCards(resposta.data);
}

// ROTINA PARA MONTAR OS CARDS DE ACORDO COM A LISTA DE RECADOS
function montarCards(recadosAPI) {
  const row = document.getElementById('lista-recados');
  row.innerHTML = "";

  if (recadosAPI.length === 0) {
    const p = document.createElement('p');
    p.classList.add('text-center');
    p.innerText = "Nenhum recado cadastrado! 😔";
    row.appendChild(p);
    return;
  }

  recadosAPI.reverse().forEach((recado) => {
    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-lg-6');
    divCol.innerHTML = `
        <div class="card">
            <h5 class="card-header">${recado.description}</h5>
            <div class="card-body">
                <p class="card-text">${recado.detail}</p>

                <button class="btn btn-success" onclick="prepararAtualizacao('${recado.id}', '${recado.description}', '${recado.detail}')">
                    <i class="bi bi-pencil-square"></i>
                    Editar
                </button>

                <button class="btn btn-danger" onclick="prepararExclusao('${recado.id}')">
                    <i class="bi bi-trash"></i>
                    Excluir
                </button>
            </div>
        </div>
      `;
    row.appendChild(divCol);
  });
}

// ROTINA QUE EXECUTA AO CLICK DO BOTÃO EXCLUIR
function prepararExclusao(id) {
  modalExcluir.show();

  const btnExcluir = document.getElementById('btn-exclusao-recado');

  btnExcluir.onclick = async () => {
    loading(true, 'exclusao-recado');
    const token = getToken();

    const resposta = await deleteRecado(token, id);

    loading(false, 'exclusao-recado');
    modalExcluir.hide();

    if (resposta.success === false) {
      notificacao(resposta.message, 'danger');
      logout();
      return;
    }

    notificacao(resposta.message, 'success');
    await listarRecados(token);
  }
}

// ROTINA QUE EXECUTA AO CLICK DO BOTÃO EDITAR
function prepararAtualizacao(id, descricao, detalhamento) {
  modalAtualizar.show();

  const formAtualizar = document.getElementById('form-atualizar-recado');
  const inputDescricao = document.getElementById('descricao-atualizar-recado');
  const inputDestalhamento = document.getElementById('detalhamento-atualizar-recado');

  inputDescricao.value = descricao;
  inputDestalhamento.value = detalhamento;

  formAtualizar.onsubmit = async (ev) => {
    ev.preventDefault();

    const recadoAtualizado = {
      descricao: ev.target['descricao-atualizar-recado'].value,
      detalhamento: ev.target['detalhamento-atualizar-recado'].value
    }

    loading(true, 'atualizao-recado');
    const token = getToken();

    const resposta = await putRecado(token, id, recadoAtualizado.descricao, recadoAtualizado.detalhamento);

    loading(false, 'atualizao-recado');
    modalAtualizar.hide();

    if (resposta.success === false) {
      notificacao(resposta.message, 'danger');
      logout();
      return;
    }

    notificacao(resposta.message, 'success');
    await listarRecados(token);
  }

}

// ROTINA PARA FAZER LOGOUT NA APLICAÇÃO
function logout() {
  localStorage.removeItem('token');

  setTimeout(() => {
    window.location.href = "index.html"
  }, 2000)
}




