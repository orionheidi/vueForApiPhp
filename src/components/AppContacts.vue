<template>
      <ul>
       <li v-for="contact in contacts" :key="contact.id">
           {{contact.first_name}}
       </li>
   </ul>
</template>

<script>
import { contactService } from '@/services/Contacts'
export default {
    data(){
        return {
            contacts: []
        }
    },

    // create (){
    //     contacts.getAll().then(response =>{

    //     }).chatch(error => {

    //     })
    // }

    async created (){
        try {
           const response =  await contactService.getAll()
           console.log(response)
           this.contacts = response.data;
        }catch (error){
            console.log(error)
        }
    }

}
</script>

<style>

</style>
