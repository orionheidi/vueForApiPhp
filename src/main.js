import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

import { contactService } from '@/services/Contacts'


const store = new Vuex.Store({
  state: {
    contacts: []
  },
  actions:{

    async fatchContacts (context){
       //pozove metodu servisa
      //komituje mutaciju
     const response = await contactService.getAll()
    context.commit('SET_CONTACTS',response.data)

    },
    async createContact (context,contact){
      const response = await contactService.create(contact)
      context.commit('ADD_CONTACT',response.data)
      //moze i ovo
      // context.commit(SET_CONTACTS,[
      //   ...context.getter.contacts,response.data
      // ])

    },
    async deleteContact(context,contact){
      const response = await contactService.delete(contact)
      context.commit('REMOVE_CONTACT',response.data)
    }
  },
  getters:{
    contacts: state => state.contacts
  },
  mutations:{
    SET_CONTACTS(state,contacts){
      state.contacts = contacts;
    },
    ADD_CONTACT(state,contact){
      state.contacts.push(contact)
    },
    REMOVE_CONTACT(state,contact){
      state.contacts.splice(contact, 1);
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
