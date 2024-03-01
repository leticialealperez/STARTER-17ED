export class Contador { 
 
    // 1 - Definir o atributo
    // 2 - Atribuir o valor de um atributo
    constructor(public valor: number = 0) {
    }

    zerar(): void {
        this.valor = 0;
    }

    incrementar(incremento: number): void {
        this.valor += incremento
    }

    retornarValor(): number {
        return this.valor
    }
}