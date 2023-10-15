import { users } from "./users.js"

function buscarDados (nickname){
    return fetch(`https://api.github.com/users/${nickname}`)
    .then(response => response.json())
    .catch( err => console.log(err))
}

async function userDados(nickname, indice){
    const userDados = await buscarDados(nickname)
    const user = {
        image: userDados.avatar_url,
        github: userDados.html_url,
        name: userDados.name,
        project: users[indice].project
    }
    return user
}

export {userDados}