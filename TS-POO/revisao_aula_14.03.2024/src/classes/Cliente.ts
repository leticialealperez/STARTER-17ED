import { cnpj, cpf } from 'cpf-cnpj-validator';

export class Cliente {

    constructor(
        private _documento: string,
        private _nome: string,
        private _tipoJuridico: 'PF' | 'PJ'
    ) {
        this.validar();
    }

    public get documento() : string {
        return this._documento
    }

    public get nome() : string {
        return this._nome
    }

    public get tipoJuridico() : 'PF' | 'PJ' {
        return this._tipoJuridico
    }

    private validar(): void {
        if(this._tipoJuridico == 'PF') {
            const cpfValido = cpf.isValid(this._documento)

            if(!cpfValido) {
                throw Error('CPF inválido')
            }
        } else {
            const cnpjValido = cnpj.isValid(this._documento)

            if(!cnpjValido) {
                throw Error('CNPJ inválido')
            }
        }
    }
}

