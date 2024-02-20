/* 
    ARRAY
    Usado sempre que precisarmos armazenar vários dados de um mesmo tipo referente à uma mesma coisa.
    Ex: uma lista de nomes, uma lista de preços, uma lista de notas
*/
let nomes: string[] = ["John", "Oliver", "Harry"];
let precos: number[] = [59.9, 109.9, 10.9];
let notas: number[] = [7, 6, 8];


/*

    OBJETO (literal)
    Usado sempre que precisarmos armazenar vários dados de tipos diferentes referente à uma mesma coisa.
    Ex: dados de um aluno, dados de um produto, dados de uma assinatura, dados de um pedido, etc

*/
let aluno: object = {
    nome: "John",
    idade: 28,
    ativo: true
}

let produto: object = {
    descricao: "Iphone 15 Pro",
    preco: 8000,
    emEstoque: false
}

produto.descricao // hmm, tipado certo mas parece que a propriedade .descricao não é conhecida pelo tipo object. Como resolver?
