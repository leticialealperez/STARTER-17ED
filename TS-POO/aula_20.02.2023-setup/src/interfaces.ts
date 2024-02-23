// REGRA - sempre com a inicial maiuscula => padrão PascalCase

export interface Aluno {
    nome: string;
    idade: number;
    matriculado: boolean;
}


export interface Produto {
    titulo: string;
    valor: number;
    emEstoque: boolean;
    desconto?: number;
}