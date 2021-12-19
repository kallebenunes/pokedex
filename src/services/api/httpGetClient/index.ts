import axios from 'axios'

async function httpGetClient (url: string){
    const response = await axios.get(url)
    return response
}

export {httpGetClient}