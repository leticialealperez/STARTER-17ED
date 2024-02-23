import { Aluno, Produto } from './interfaces';

/*

REVISÃO
1 - Inicializar projeto node - npm init -y
2 - Instalar o TS como dependencia de desenvolvimento - npm i -D typescript
3 - Criar a pasta src com o arquivo index.ts e um console.log
4 - Criar o arquivo de configuração do transpilador - npx tsc --init
5 - Editar o arquivo para a preferencia do projeto
6 - PLUS: adiciona o include e exclude no tsc
7 - Instalar e configurar o ts-node-dev como dependencia de desenvolvimento - npm i -D ts-node-dev
8 - Instalar a tipagem do node - npm i -D @types/node
9 - Criar o script de automação do ambiente de desenvolvimento
  "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts"
 
*/



// VARIÁVEIS primitivas
// const nome: string = "John";
// const idade: number = 28;
// const altura: number = 1.73;
// const matriculado: boolean = true;

// let curso: any = "Full Stack";
// curso = true;
// curso.toUpperCase(); // isso irá estourar um erro


// OPERADORES aritméticos
// let a: number = 10;
// let b: number = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// OPERADORES de atribuição
// let a: number = 10;
// let b: number = 2;
// a += b   // a = a + b
// a -= b   // a = a - b
// a *= b   // a = a * b
// a /= b   // a = a / b
// a %= b   // a = a % b
// a **= b  // a = a ** b
// a++         // a = a + 1
// a--         // a = a - 1
// console.log(a);

// OPERADORES de comparação - valor da esquerda do operador comparado ao valor à direita do operador
// let a: number = 10;
// let b: number = 2;
// console.log(a == b);   // A igual a B?                        => igual em valor
// console.log(a === b);  // A estritamente igual a B?           => igual em valor e tipo
// console.log(a != b);   // A diferente que B?                  => diferente em valor
// console.log(a !== b);  // A estritamente diferente que B?     => diferente em valor e tipo
// console.log(a > b);    // A maior que B? 
// console.log(a < b);    // A menor que B? 
// console.log(a >= b);   // A maior ou igual à B? 
// console.log(a <= b);   // A menor ou igual à B? 

// OPERADORES lógicos
// console.log(true || false); // OR  => só retorna false se ambas as expressões forem false
// console.log(true && false); // AND => só retorna true se ambas as expressões forem true
// console.log(!true);         // NOT => inverte o resultado lógico






// CONDICIONAIS - definem um desvio no fluxo de execução a partir de um resultado lógico

// IF ELSE
// let a: number = 10;
// let b: number = 2;

// if(a > b) {
//     // somente quando VERDADEIRO executa aqui
//     console.log(a);
// } else {
//     // se não, executa aqui
//      console.log(b);
// }

// SWITCH CASE
// const tipoUsuario: string = "administrador";

// switch(tipoUsuario) {
//     case 'administrador':
//         console.log("Acesso à todos as funcionalidades");
//         break;
//     case 'financeiro':
//         console.log("Acesso à funcionalidade: relatórios financeiros");
//         break;
//     case 'comercial':
//         console.log("Acesso à funcionalidade: clientes, produtos, estoque e vendas");
//         break;
//     default:
//         console.log("Funcionalidades bloqueadas, acesso disponível apenas à usuários da aplicação.");
// }





// ESTRUTURAS de repetição
// FOR - é capaz de executar um conjunto de instruções por uma quantidade definida de vezes
// for(let contador:number = 1; contador <= 10; contador++) {
//     console.log(`[${contador}]`)
// }

// WHILE - é capaz de executar um conjunto de instruções por uma quantidade indefinida de vezes
// let contador: number = 1;
// while(contador <= 10) {

//     console.log(`[${contador}]`)
//     contador++

// }

// DO WHILE - é capaz de executar um conjunto de instruções por uma quantidade indefinida de vezes
// let contador: number = 1;

// do {

//     console.log(`[${contador}]`)
//     contador++

// } while(contador >= 10)





// FUNÇÕES

// sem parametro e sem retorno
// function apresentacao(): void {
//     const nome = "John";
//     console.log(`Hello, ${nome}`);
// }

// com parametro e sem retorno
// function apresentacao(nome: string): void {
//     console.log(`Hello, ${nome}`);
// }

// sem parametro e com retorno
// function apresentacao(): string {
//     const nome = "John";
//     return `Hello, ${nome}`;
// }

// com parametro e com retorno
// function apresentacao(nome: string): string {
//     return `Hello, ${nome}`;
// }

// ARROW FUNCTIONS
// const apresentacao = (nome: string): string => {
//     return `Hello, ${nome}`;
// }

// const apresentacao = (nome: string): string => `Hello, ${nome}`;

// const nome: string = "John";
// const mensagem: string = apresentacao(nome);
// console.log(mensagem);




// VARIÁVEIS estruturadas

/* 
    ARRAY
    Usado sempre que precisarmos armazenar vários dados de um mesmo tipo referente à uma mesma coisa.
    Ex: uma lista de nomes, uma lista de preços, uma lista de notas
*/

// let nomes: string[] = ["John", "Oliver", "Harry"];
// let tecnologias: Array<string>= ["JS", "HTML", "CSS"];
// let precos: number[] = [59.9, 109.9, 10.9];
// let notas: Array<number> = [7, 6, 8];


/*

    OBJETO (literal)
    Usado sempre que precisarmos armazenar vários dados de tipos diferentes referente à uma mesma coisa.
    Ex: dados de um aluno, dados de um produto, dados de uma assinatura, dados de um pedido, etc

*/

let john: Aluno = {
    nome: "John",
    idade: 28,
    matriculado: true
}

let pedro: Aluno = {
    nome: "Pedro",
    idade: 27,
    matriculado: true
}

let maria: Aluno = {
    nome: "Maria",
    idade: 18,
    matriculado: false
}

let iphone: Produto = {
    titulo: "Iphone",
    valor: 9000,
    emEstoque: true,
    desconto: 50
}

let ipad: Produto = {
    titulo: "Ipad",
    valor: 13000,
    emEstoque: false,
}

let macbook: Produto = {
    titulo: "MacBook",
    valor: 13000,
    emEstoque: false,
}

console.log(iphone.desconto); // 50
console.log(ipad.desconto);   // undefined



// ARRAYS DE OBJETOS
const alunos: Aluno[] = [john, pedro, maria];
const produtos: Produto[] = [iphone, ipad, macbook];


// MÉTODOS DE ARRAYS

// .map

// .filter

// .find

// .findIndex

// .some

// .every

// .forEach

// .reduce


















