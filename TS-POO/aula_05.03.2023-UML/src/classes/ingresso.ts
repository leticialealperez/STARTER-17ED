export abstract class Ingresso {
    constructor(
        protected _valor: number
    ) {}


    public imprimeValor(): void {
        console.log(this._valor)
    }
}