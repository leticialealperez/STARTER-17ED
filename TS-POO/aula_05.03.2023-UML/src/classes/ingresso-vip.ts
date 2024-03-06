import { Ingresso } from './ingresso'


export class IngressoVip extends Ingresso {
    constructor(
        valor: number,
        private _valorAdicional: number = 50
    ) {
        super(valor)
    }

    public imprimeValor(): void {
        console.log(this._valor + this._valorAdicional)
    }
}
