import axios from 'axios'

class Contacts {

    constructor(){
        axios.get('http://localhost:8000/api/contacts')
    }
}

export const contacts = new Contacts();