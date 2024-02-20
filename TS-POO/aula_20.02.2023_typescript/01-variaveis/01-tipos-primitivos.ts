let isActive: boolean = true; // variável do tipo boolean só podem ser true ou false
let username: string = "John Doe"; // variável do tipo string armazena um caracter ou uma cadeia de caracteres
let age: number = 28; // variável do tipo number armazena um número que pode ser inteiro ou decimal
let height: number = 1.73 // variável do tipo number armazena um número que pode ser inteiro ou decimal


let password: any = 10; // variável do tipo any armazena qualquer tipo de dado a qualquer momento do seu ciclo de vida
password = "123456"; // variável do tipo any armazena qualquer tipo de dado a qualquer momento do seu ciclo de vida
password.toUppercase();

let weight: unknown = 73.5; // variável do tipo unknown armazena um tipo de dado desconhecido.
(weight as number).toFixed(); // No momento do "uso" deve se especificar qual o tipo esperado para o dado

let order: null = null; // variável do tipo null armazena um dado nulo.
let product: undefined = undefined; // variável do tipo undefined armazena um dado indefinido.

