/* HERANÇA 
    

    Como o próprio nome já diz, herança vem de "herdar" assim como no mundo real, onde o FILHO herda caracteristicas PAI.
    Utilizado quando há a necessidade de representar duas classes similares, onde existem propriedades e métodos em comum mas onde também cada classe possui características próprias.
    É também uma forma de evitar repetição de código, onde é gerado um relacionamento do tipo "X é Y".

    
    Beleza, mas como?

    1 - Utilizando o termo "extends"
    A palavra chave extends é usada em uma declaração de classe para criar uma classe filha de outra classe pai.

    2 - super()
    A palavra-chave super é usada para acessar o construtor da classe pai, em outros casos.

*/

import { Pessoa } from './02-encapsulamento';


export class Usuario extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        email: string,
        private _senha: string
    ){
       super(nome, cpf, telefone, email)
    }

    
    public get senha() : string {
        return `*****`
    }

    
    public set senha(novaSenha : string) {
        if(novaSenha.length < 5) {
            throw Error('Senha muito curta')
        } 

        this._senha = novaSenha;
    }
    
    
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        email: string,
        private _matricula: string,
        private _nota: number
    ){
       super(nome, cpf, telefone, email)
    }
}

export class TechHelper extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        email: string,
        private _salario: number
    ){
       super(nome, cpf, telefone, email)
    }
}




