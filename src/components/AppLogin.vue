<template>
   <form @submit.prevent="handleLogin">
       <label for="email">Email:</label>
       <input type="text" name="email" v-model="email"/>
       <label for="password">Password:</label>
       <input type="text" name="password"  v-model="password"/>
       <button type="subimt">Log in</button>
   </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return {
            password: '',
            email:''
        }
    },
methods: {
        ...mapActions(['login']),

        async handleLogin(){
        await this.login({
        email: this.email,
        password :this.password
        })
        this.$router.push('/contacts')
        }
    },

    beforeRouteEnter(to,from,next){
        next(komponentaBuducnosti => {
        komponentaBuducnosti.email ='foster.hauck@example.org'
    })
}
}
</script>

<style>

</style>