export default function authenticated(){
    const now = Date.now()

    const token = localStorage.getItem('dcsolution.auth.token')
    const apiToken = localStorage.getItem('dcsolution.auth.apitoken')
    const firstName = localStorage.getItem('dcsolution.user.firstname')
    const lastName = localStorage.getItem('dcsolution.user.lastname')

    const validityLogin = localStorage.getItem('dcsolution.login.validity')

    if(validityLogin == undefined || validityLogin == "" || validityLogin < now){
        return false
    }

    if(token != undefined  && token != "" 
        && apiToken != undefined  && apiToken != "" 
        && firstName != undefined  && firstName != "" 
        && lastName != undefined  && lastName != ""){
           return true
    }
    
    return false
}