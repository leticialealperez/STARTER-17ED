/*
    CARTEIRA 
    Saldo - number

    Transações - lista de dados 


*/

/*

    TRANSAÇÃO

    valor - number
    tipo - 'entrada' ou 'saida'

*/

export interface Carteira {
    saldo: number;
    transacoes: Transacao[];
    
}

export interface Transacao {
    valor: number,
    tipo: TipoTransacao
}



type TipoTransacao = 'entrada' | 'saida'
