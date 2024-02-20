function apresentacao(name: string): string {
    return `Hello, ${name}!`;
}

const username = "John";
const mensagem = apresentacao(username);
console.log(mensagem);