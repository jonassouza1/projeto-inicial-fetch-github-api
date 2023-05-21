
import { baseUrl, repositoriesQuantity } from './src/scripts/variables.js'

async function eventUser(userName) {
    const url = `${baseUrl}${userName}/events?per_page=${repositoriesQuantity}`;
    const response = await fetch(url)
    return await response.json()
}

export { eventUser }
