import axios from 'axios'

class Auth {
    constructor(){
        const token = localStorage.getItem('token')
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
    async login(credencials){
        try{
        const response = await axios.post('http://localhost:8000/api/auth/login',
            credencials
        )
        //postaviti token ulocal storage
    //postaviti token u autorization header
        const token = response.data.access_token
        localStorage.setItem('token',token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        console.log(response)
    }catch(error){
        console.log(error)
    }
    }

    // localStorage.getItem('firstName')
    // localStorage.setItem('firstName', 'Aleksandra')
    // localStorage.clear()
    // localStorage.removeItem('firstName')

    isAuthenticated (){
        //da li postoji token, vraca ga, ako ne onda null
        return !!localStorage.getItem('token')
    }

    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }
}

export const authService = new Auth();