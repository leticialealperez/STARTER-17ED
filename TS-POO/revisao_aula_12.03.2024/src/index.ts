import { calcularMediaPonderada } from './exercicios_lista1/02';
import { NotaPeso } from './interfaces/NotaPeso';

console.log("Growdev 2024 🚀")


// const resultadoMedia = mediaAlunos(5,4)
// console.log(resultadoMedia)



const notas: NotaPeso[] = [
    {nota: 8, peso: 2},
    {nota: 7, peso: 3},
];

const resultadoMedia = calcularMediaPonderada(notas)
console.log(resultadoMedia)