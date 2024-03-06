// superclass - classe Mãe
// (+) public
// (-) private 
// (#) protected

export abstract class Pessoa {
    constructor(
        protected _nome: string,
        protected _cpf: string,
        protected _idade: number,
        protected _email: string,
        protected _telefone: string,
        protected _rg?: string,
    ) {}

    public atualizarNome(novoNome: string) {
        this._nome = novoNome;
    }
}



