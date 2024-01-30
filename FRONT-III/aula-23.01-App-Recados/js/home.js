window.addEventListener("scroll", () => {
  const scrolled = document.documentElement.scrollTop;
  const btn = document.getElementById("btn-voltar-topo");

  if (scrolled > 300) {
    btn.style = "display: inline;";
  } else {
    btn.style = "display: none;";
  }
});

document.getElementById("btn-voltar-topo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Listener para capturar o carregamento da página
//ctrl click
document.addEventListener("DOMContentLoaded", () => {
  verificarAutorizacao();
});

document
  .getElementById("form-cadastro-recado")
  .addEventListener("submit", (ev) => {
    ev.preventDefault();

    console.log("adicionar");
  });

document
  .getElementById("form-atualizar-recado")
  .addEventListener("submit", (ev) => {
    ev.preventDefault();

    console.log("atualizar");
  });

document.getElementById("btn-exclusao-recado").addEventListener("click", () => {
  console.log("excluir");
});

function verificarAutorizacao() {
  const token = localStorage.getItem("token");

  // Se não tiver autorizado ou se o usuário fez logout
  // Redireciona o usuário para a página de login
  // Para a execução da funçã0
  if (token === null) {
    window.location.href = "index.html";
    return;
  }

  return token;
}
