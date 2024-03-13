/*

Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.

*/



import { Carteira, Transacao } from '../interfaces/Carteira';

const niquileiraAndrea: Carteira = {
    saldo: 0,
    transacoes: []
}

function criarTransacao(novaTransacao: Transacao): void {

    if(novaTransacao.tipo === 'saida') {
        if(niquileiraAndrea.saldo >= novaTransacao.valor) {
            niquileiraAndrea.transacoes.push(novaTransacao)
            niquileiraAndrea.saldo -= novaTransacao.valor
        } else {
            throw Error('Saldo insuficiente para esta transação')
        }
    } else {
        niquileiraAndrea.transacoes.push(novaTransacao)
        niquileiraAndrea.saldo += novaTransacao.valor
    }
}

function criarTransacaoV2(novaTransacao: Transacao): void {
    if(novaTransacao.tipo === 'saida' && niquileiraAndrea.saldo < novaTransacao.valor) {
        throw Error('Saldo insuficiente para esta transação')
    }

    niquileiraAndrea.transacoes.push(novaTransacao)
    
    novaTransacao.tipo === 'entrada' 
        ? niquileiraAndrea.saldo += novaTransacao.valor 
        :  niquileiraAndrea.saldo -= novaTransacao.valor

}

criarTransacao({ tipo: 'entrada', valor: 100 })
criarTransacao({ tipo: 'saida', valor: 50 })
