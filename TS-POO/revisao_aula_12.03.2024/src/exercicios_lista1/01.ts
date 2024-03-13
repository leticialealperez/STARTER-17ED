/*

Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.

*/

import { Resultado } from '../interfaces/resultado';


export function mediaAlunos (n1: number, n2: number): Resultado {
    const resultadoMedia = (n1 + n2) / 2;
    const aprovado = resultadoMedia >= 6
    
    return {
        resultadoMedia, 
        aprovado
    }
}


