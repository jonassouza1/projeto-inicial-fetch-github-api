
import { user } from './services/user.js'
import { repos } from './services/repositories.js'
import { eventUser } from './services/events.js'

import { objUser } from './objects/obj.js'
import { screen } from './objects/screen.js'

const btm = document.querySelector('#btn-search')

document.querySelector('#input-search').addEventListener('keyup', (el) => {
    const inputUser = el.target.value
    const key = el.which || el.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateInput(inputUser)) return

        getUserProfile(inputUser)

    }
})

btm.addEventListener('click', () => {
    const inputUser = document.querySelector('#input-search').value
    if (validateInput(inputUser)) return
    getUserProfile(inputUser)

})
function validateInput(inputUser) {
    if (inputUser.length === 0) {
        alert('Preencha o campo com o nome do usuário go GitHub')
        return true
    }
}

async function getUserProfile(userName) {
    const users = await user(userName)
    if (users.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const reposi = await repos(userName)
    const userEvents = await eventUser(userName)

    objUser.setInfo(users)
    objUser.setRepositories(reposi)
    objUser.setEvents(userEvents)

    screen.renderUser(objUser)

}




