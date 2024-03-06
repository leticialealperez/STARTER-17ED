import { Carro } from './carro';
import { Contrato } from './contrato';
import { Pessoa } from './pessoa';

// supraclass => classe Filha
export class Motorista extends Pessoa implements Contrato {
    constructor(
        nome: string,
        cpf: string,
        idade: number,
        email: string,
        telefone: string,
        private _cnh: string,
        private _tipoCnh: string,
        private _licenca?: string,
        rg?: string
    ) {
        super(nome, cpf, idade, email, telefone, rg)
    }
    
    public get cnh() : string {
        return this._cnh;
    }

    public get tipoCnh() : string {
        return this._tipoCnh;
    }

    public get licenca(): string | undefined {
        return this._licenca;
    }
    
    
    public atualizarLicenca(novaLicenca: string): void {
        this._licenca = novaLicenca;
    }

    public dirigir(carro: Carro): void {
        // Como o motorista irá dirigir
        console.log(`Dirigindo o ${carro.modelo} na cor ${carro.cor}`);
    }


}