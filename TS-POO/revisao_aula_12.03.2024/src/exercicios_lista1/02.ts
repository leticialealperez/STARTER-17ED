/*

Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:

Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

*/

import { NotaPeso } from '../interfaces/NotaPeso';



export function calcularMediaPonderada(notas: NotaPeso[]) {
    let somaNotas: number = 0;
        
    notas.forEach(i => {somaNotas += i.nota * i.peso})

    const resultado: number= somaNotas / notas.length

    return resultado

}

