function criarCard (user){
return`
    <article class="git-user">
        <div class="div-botton">
            <div class="container-botton">
                <img src="${user.image}" alt="${user.name}" class="botton-image" id="user-image">
                <div class="botton"></div>
            </div>
        </div>
        <div class="div-information">
            <h2 id="user-name">${user.name}</h2>
            <div class="redes">
                <a href="${user.github}" target="_blank" id="github">
                    <img src="./assets/img/icons8-github-100.png" alt="teste">
                </a>
                <a href="${user.project}" target="_blank" id="projeto">
                    <img src="./assets/img/icons8-barbearia-80.png" alt="teste">
                </a>
            </div>
        </div>
    </article>
`
}
export {criarCard}