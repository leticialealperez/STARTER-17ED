
window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;
    const btn = document.getElementById('btn-voltar-topo');

    if (scrolled > 300) {
        btn.style = 'display: inline;'
    } else {
        btn.style = 'display: none;'
    }
});

document.getElementById('btn-voltar-topo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.getElementById('form-cadastro-recado').addEventListener('submit', (ev) => {
    ev.preventDefault();

    console.log('adicionar')
});

document.getElementById('form-atualizar-recado').addEventListener('submit', (ev) => {
    ev.preventDefault();

    console.log('atualizar')
});

document.getElementById('btn-exclusao-recado').addEventListener('click', () => {
    console.log('excluir')
});