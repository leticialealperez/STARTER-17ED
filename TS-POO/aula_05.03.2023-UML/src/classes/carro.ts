import { AutoRadio } from './auto-radio';
import { Motor } from './motor';
import { Pneu } from './pneu';

export class Carro {
    constructor(
        private _marca: string,
        private _modelo: string,
        private _cor: string,
        private _motor: Motor,
        private _pneus: Pneu[],
        private _autoRadio?: AutoRadio
    ) {
        this.validar()
    }

    
    public get marca() : string {
        return this._marca
    }

     public get modelo() : string {
        return this._modelo
    }

    public get cor() : string {
        return this._cor
    }

    public set autoRadio(novoAparelho: AutoRadio) {
        this._autoRadio = novoAparelho;
    }
    

    private validar(): void {
        if(this._pneus.length < 4) {
            throw Error('É preciso ao menos 4 pneus para compor um carro.')
        }
    }
}