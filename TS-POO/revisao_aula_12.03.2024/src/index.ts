import { criarTransacao, criarTransacaoV2 } from './exercicios_lista1/03';

console.log("Growdev 2024 🚀")


// const resultadoMedia = mediaAlunos(5,4)
// console.log(resultadoMedia)



// const notas: NotaPeso[] = [
//     {nota: 8, peso: 2},
//     {nota: 7, peso: 3},
// ];

// const resultadoMedia = calcularMediaPonderada(notas)
// console.log(resultadoMedia)

criarTransacao({ tipo: 'entrada', valor: 100 })
criarTransacao({ tipo: 'saida', valor: 50 })

criarTransacaoV2({ tipo: 'entrada', valor: 100 })
criarTransacaoV2({ tipo: 'saida', valor: 50 })