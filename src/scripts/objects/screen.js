let usersNew = document.querySelector('.profile-data')
const screen = {
  userProfile: usersNew,
  renderUser(users) {
    this.userProfile.innerHTML = `<div class="info">
                        <img src="${users.avatarUrl}" alt="Foto do perfil do usuário"/>
                        <div class="data">
                        <h1>${users.name ?? 'Não possui nome cadastrado 😢'}</h1>
                        <p>${users.bio ?? 'Não possui bio cadastrada 😢'}</p>
                        <p> 👥Seguidores:${users.followers}</p>
                        <p>👥Seguindo:${users.following}</p>
                        </div>
                        </div>`
    let repositoriesUsers = ''
    users.repositories.forEach((repo) => {
      repositoriesUsers += `<li>
                                    <a href"${repo.html_url}" target="_black">${repo.name}
                                    <div class="infoRepo">
                                     <span>🍴${repo.forks}</span>
                                     <span>⭐${repo.stargazers_count}</span>
                                     <span>👀${repo.watchers}</span>
                                     <span> ${repo.language ?? '❌'}</span>
                                     </div>
                                    </a>
                                  </li>`})

    if (users.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section"
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesUsers}</ul>
                                           </div>`
    }
    let eventsList = ''
    users.eventsuser.forEach((evt) => {
      if (evt.type === 'PushEvent') {
        eventsList += `<li>
                          <p>${evt.repo.name}</p>
                          <span>- ${evt.payload.commits[0].message}</span>
                        </li>`}
      else if (evt.type === 'CreateEvent') {
        eventsList += `<li>
                          <p>${evt.repo.name}</p>
                          <span>${'- sem commits'}</span>
                        </li>`
      }
    })
    this.userProfile.innerHTML += `<div class="eventsMessage">
                                             <h3>Eventos</h3>
                                             <ul>${eventsList}<ul>
                                           </div>`
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
}

export { screen }
