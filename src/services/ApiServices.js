import axios from "axios";
import toast from 'react-hot-toast'

// const BASE_URL = 'http://demo8627454.mockable.io/'
const BASE_URL = 'http://localhost:8000'

const API = axios.create({
    baseURL: BASE_URL
})

function sendGET(path, header, callback){
    return send('get', path, null, header, callback)
}

function sendPOST(path, body, header, callback){
    return send('post', path, body, header, callback)
}

// export default function sendPUT(path, body, header, callback){
//     return this.send('post', path, body, header, callback)
// }

function send(action, path, body, header, callback){
    try{
        const validity = localStorage.getItem('dcsolutions.auth.validity')
        const _AUTH_TOKEN = localStorage.getItem("dcsolution.auth.token")
        const _ACCESS_TOKEN = localStorage.getItem("dcsolution.auth.apitoken")
        const _ORIGIN_TOKEN = "3e4b22c0-7519-4692-b07f-6168588d1d6b"


        const now = Date.now()
        
        if(validity != undefined && validity < now){
            // alert("CHAMAR REFRESH TOKEN")
            // console.log("CHAMAR REFRESH TOKEN")
        }

        let headers = {
            "Authorization": "Bearer " + _AUTH_TOKEN,
            "api_token": _ACCESS_TOKEN,
            "origin_token": _ORIGIN_TOKEN
        }

        if(action === 'post'){
            return API.post(path, body, { headers: headers })
                .then(callback)
                .catch(error => {
                    console.log(">>> ERROR POST API: ", error) 
                    toast.error(error.response.data.message, { position: "top-right" }) 
                })
        } else if(action == 'get'){
            return API.get(path, { crossdomain: true, headers: headers })
                .then(callback)
                .catch(error => { 
                    console.log(">>> ERROR GET API: ", error) 
                    toast.error(error.response.data.message, { position: "top-right" }) 
                })
        } else if(action == 'put'){
            return API.put(path, body, { headers: headers })
                .then(callback)
                .catch(error => { 
                    console.log(">>> ERROR PUT API: ", error) 
                    toast.error(error.response.data.message, { position: "top-right" }) 
                })
        }
    } catch {
        toast.error("Erro ao chamar o serviço desejado. Tente novamente mais tarde!", { position: "top-right" })
    }
}

export { sendGET, sendPOST }