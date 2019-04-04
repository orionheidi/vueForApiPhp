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

    delete (id){
        return axios.delete('http://localhost:8000/api/contacts/id')
    }
}

export const contactService = new Contacts();