
// VARIÁVEIS estruturadas

/*

    OBJETO (literal)
    Usado sempre que precisarmos armazenar vários dados de tipos diferentes referente à uma mesma coisa.
    Ex: dados de um aluno, dados de um produto, dados de uma assinatura, dados de um pedido, etc

    Podem ser:
    1 - Anônimos 
    2 - Nomeados 

*/

// Tipos anônimos de objetos literais 
// function apresentacao(usuario: { nome: string; ativo: boolean; }): void {
//     if(usuario.ativo) {
//         console.log(`Hello, ${usuario.nome}`)
//     } else {
//         console.log(`${usuario.nome}, sua conta esta inativa. Entre em contato.`)
//     }
// }

// const usuario: { nome: string; ativo: boolean } = {
//     nome: 'John',
//     ativo: true
// }

// apresentacao({ nome: 'John', ativo: true });



// Tipos nomeados de objetos literais - INTERFACE
// interface Usuario {
//     nome: string; 
//     ativo: boolean
// }

// function apresentacao(usuario: Usuario): void {
//     if(usuario.ativo) {
//         console.log(`Hello, ${usuario.nome}`)
//     } else {
//         console.log(`${usuario.nome}, sua conta esta inativa. Entre em contato.`)
//     }
// }

// const usuario: Usuario = {
//     nome: 'John',
//     ativo: true
// }

// apresentacao({ nome: 'John', ativo: true });




// Tipos nomeados de objetos literais - TYPE ALIAS
// type Usuario = {
//     nome: string;
//     ativo: boolean;
// }

// function apresentacao(usuario: Usuario): void {
//     if(usuario.ativo) {
//         console.log(`Hello, ${usuario.nome}`)
//     } else {
//         console.log(`${usuario.nome}, sua conta esta inativa. Entre em contato.`)
//     }
// }

// const usuario: Usuario = {
//     nome: 'John',
//     ativo: true
// }

// apresentacao({ nome: 'John', ativo: true });




// Propriedades opcionais em um objeto - MARK ?
// type Usuario = {
//     nome: string;
//     ativo: boolean;
//     email?: string;
// }

// function apresentacao(usuario: Usuario): void {
//     if(usuario.ativo) {
//         console.log(`Hello, ${usuario.nome}`)
//         console.log(`E-mail: ${usuario.email ?? 'Não Informado' }`);
//         // verificado == true ? true : false  => ternário
//         // console.log(`E-mail: ${usuario.email ? usuario.email : 'Não Informado' }`);
        
//     } else {
//         console.log(`${usuario.nome}, sua conta esta inativa. Entre em contato.`)
//     }
// }

// const usuario: Usuario = {
//     nome: 'John',
//     ativo: true
// }

// apresentacao({ nome: 'John', ativo: true, email: 'john@teste.com' });


/* 
    TYPE x INTERFACE

    Type
    - Pode ser utilizado como alias para outras tipagens. Ou seja, construir tipos customizados a partir de outros tipos

    Interfaces
    - Pode-se criar novas interfaces que se unem à outra interface utilizando o termo "extends"

*/

// TYPE ALIASES - Caso de uso: quando precisamos de valores pre determinados em uma variável
// Ex: "administrador" ou "financeiro" ou "comercial"

// interface Usuario {
//     nome: string;
//     ativo: MeuBoolean;
//     email?: string;
//     perfil: Perfil;
//     status: Status;
// }

// type Perfil = 'administrador' | 'financeiro' | 'comercial';
// type MeuBoolean = true | false; 
// type Status = 1 | 2 | 3;

// const usuario: Usuario = {
//     nome: 'John',
//     ativo: true,
//     perfil: 'administrador',
//     status: 1
// }




// União de Tipos (INTERSECTION TYPES) - criar um novo tipo a partir da união de outros 2 ou mais tipos
// O novo tipo criado utilizando a União (&) terá as propriedades de ambos os tipos
// type Usuario = {
//     nome: string;
// }

// type Contato = {
//     telefone: string;
//     email: string;
// }

// type Endereco = {
//     rua: string;
//     cep: string;
// }


// type UsuarioCompleto = Usuario & Contato & Partial<Endereco>;
// const usuarioCompleto: UsuarioCompleto = {
//     nome: 'John',
//     email: 'john',
//     telefone: '5155',
// }


// Intersecção de Tipos (UNION TYPES) - criar um novo tipo que tenha apenas as propriedades comuns entre 2 ou mais tipos
// Um tipo pode ser composto por duas opções de forma exclusiva (ou um, ou outro).

// type Passaro = {
//     cor: string;
//     sabeVoar: boolean;
// }

// type Cachorro = {
//     peso: number;
//     cor: string;
//     sabeLatir: boolean;
// }

// type Animal = Passaro | Cachorro;

// const animal: Animal = {
//     cor: 'amarelo',
//     peso: 10,
//     sabeLatir: false,
//     sabeVoar: true
// }

// if(!('peso' in animal)) {
//     animal.sabeVoar
// } else {
//     animal.sabeLatir
// }




// União de Interfaces (extends) - Interfaces podem se unir a outras interfaces do mesmo jeito que a união dos types
// OBS:  Uma interface pode extender apenas 1 interface

interface Contato {
    telefone: string;
    email: string;
}

interface Usuario extends Contato {
    nome: string;
    ativo: boolean;
}


interface UsuarioCompleto extends Usuario {
    rua: string;
    cep: string;
}

const usuario: UsuarioCompleto = {
    nome: 'John',
    ativo: true,
    email: 'john',
    telefone: '51685454',
    cep: '4551',
    rua: 'bsdjfbsked'
}





























