
export class Calculadora {
    constructor(
        public operacoesRealizadas: Array<string> = []
    ) {}


    somar(numero1: number, numero2: number): number {
        const resultado: number = numero1 + numero2;

        this.operacoesRealizadas.push(`${numero1} + ${numero2} = ${resultado}`);
        return resultado

    }

    subtrair(numero1: number, numero2: number): number {
        const resultado: number = numero1 - numero2;

        this.operacoesRealizadas.push(`${numero1} - ${numero2} = ${resultado}`);
        return resultado
    }

    multiplicar(numero1: number, numero2: number): number {
        const resultado: number = numero1 * numero2;

        this.operacoesRealizadas.push(`${numero1} * ${numero2} = ${resultado}`);
        return resultado
    }

    dividir(numero1: number, numero2: number): number {
        if(numero2 === 0) {
            throw Error('Não é possível dividir por zero');
        }

        const resultado: number = numero1 / numero2;

        this.operacoesRealizadas.push(`${numero1} / ${numero2} = ${resultado}`);
        return resultado
    }

    imprimirHistorico(): void {
        for(const indice in this.operacoesRealizadas) {
            console.log(`[${indice}] => ${this.operacoesRealizadas[indice]}`)
        }
    }
}


