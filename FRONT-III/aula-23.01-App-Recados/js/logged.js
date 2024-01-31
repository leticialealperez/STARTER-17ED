verificarAutorizacao()

function verificarAutorizacao() {
    const token = localStorage.getItem("token");

    if (token === null) {
        window.location.href = "index.html";
        return;
    }

    return token;
}