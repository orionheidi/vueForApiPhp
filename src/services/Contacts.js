import axios from 'axios'

class Contacts {

    // constructor(){
    //     axios.get('http://localhost:8000/api/contacts')
    // }

    getAll (){
        return axios.get('http://localhost:8000/api/contacts')
    }
    
    create (contact){
        return axios.post('http://localhost:8000/api/contacts',contact)
    }
}

export const contactService = new Contacts();