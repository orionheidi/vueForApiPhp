import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

import { contactService } from '@/services/Contacts'

import { authService } from '@/services/Auth'
import AppLogin from '@/components/AppLogin'
// import AddContacts from  '@/components/AddContacts'
import AppContacts from  '@/components/AppContacts'

const routes = [
{
  path:'/login',component:AppLogin
},
{
  path:'/',
  redirect:'contacts',
  meta:{
    requiresAuth: true
  }
},
{
  path:'/contacts',
  component: AppContacts,
  meta:{
    requiresAuth: true
  }
}
]

const router = new VueRouter({
  routes,
  mode:'history',
 })
 router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authService.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

const store = new Vuex.Store({
  state: {
    contacts: []
  },
  actions:{

    logout(context){
      authService.logout()
    },
    async login(context,credencials){
      await authService.login(credencials)
    },

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
      const response = await contactService.delete(contact.id)
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
  router,
  render: h => h(App),
}).$mount('#app')
