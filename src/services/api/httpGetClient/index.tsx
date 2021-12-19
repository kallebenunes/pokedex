import axios from 'axios'

async function httpGetClient (url: string){
    const response = await axios.get(url)
    console.log(response)
}

export {httpGetClient}