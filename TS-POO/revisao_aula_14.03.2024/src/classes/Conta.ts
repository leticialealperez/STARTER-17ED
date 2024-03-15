import { Cliente } from './Cliente';

export class Conta {

    constructor(
        private _agencia: string,
        private _numero: string,
        private _digitoVerificador: string,
        private _tipo: 'CORRENTE' | 'POUPANCA',
        private _proprietario: Cliente
    ) {}


    
    public get agencia() : string {
        return this._agencia
    }

    public get numero() : string {
        return this._numero
    }

    public get digitoVerificador() : string {
        return this._digitoVerificador
    }

    public get tipo() : 'CORRENTE' | 'POUPANCA' {
        return this._tipo
    }

    
    public get proprietario() : Cliente {
        return this._proprietario
    }
    
    
}