
interface User {
    username: string;
    quemOUsuarioSegue: User[],
}


const joao: User = {
    username: 'joao',
    quemOUsuarioSegue: [], // []
}

const maria: User = {
    username: 'maria',
    quemOUsuarioSegue: [], // [joao, pedro] 
}

const pedro: User = {
    username: 'pedro',
    quemOUsuarioSegue: [], // [joao]
}

// seguidores do joao => [maria, pedro]
// seguidores da maria => []
// seguidores do pedro => [maria]



maria.quemOUsuarioSegue.push(joao)
maria.quemOUsuarioSegue.push(pedro)
pedro.quemOUsuarioSegue.push(joao)



const listaUsuarios = [joao, maria, pedro];

const seguidoresJoao = listaUsuarios.filter((usuario) => {
    const segueOJoao = usuario.quemOUsuarioSegue.some((quemOUsuarioSegue) => quemOUsuarioSegue.username === 'joao')
    return segueOJoao
});

// console.log(seguidoresJoao.forEach((u) => u.showTweet()))








