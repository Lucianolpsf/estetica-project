const container = document.querySelector('.container')

import {userDados} from './buscarDados.js'
import { criarCard } from './criarCard.js'
import { users } from './users.js'

users.forEach(async (users, indice)=>{
    
    let user =  await userDados(users.nickname, indice)
    let card = await criarCard(user)
    
    container.innerHTML += card
})