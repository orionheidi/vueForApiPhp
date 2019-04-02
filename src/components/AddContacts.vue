<template>
    <div>
        <form @submit.prevent="handleSubmit">
        <input type="text" v-model="contact.first_name">
        <input type="text" v-model="contact.last_name">
        <input type="text" v-model="contact.email">
        <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
// import { contactService } from '@/services/Contacts'
export default {
 data(){
        return {
            contact:{
                first_name: '',
                last_name:'',
                email:''
            }
        }
 },
//   computed:{
//         ...mapGetters(['contacts'])
//     },

    methods: {
        ...mapActions(['createContact']),

        handleSubmit(){
        this.createContact(this.contact);
        // this.$store.dispatch('fatchContacts')
    }

    },

//  methods:{
//      handleSubmit (){
//          contactService.create(this.contact)
//      }
//  }


}
</script>

<style>

</style>
