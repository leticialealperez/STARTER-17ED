import { Ingresso } from './ingresso';

export class IngressoCamarote extends Ingresso {
    constructor(
        valor: number,
        private _valorAdicional: number = 50,
        private _adicionalOpenBar: number = 100
    ) {
        super(valor)
    }

    public imprimeValor(): void {
        console.log(this._valor + this._valorAdicional + this._adicionalOpenBar)
    }
}
