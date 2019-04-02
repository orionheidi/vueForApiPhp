<template>
  <div id="app">
     <AddContacts/>
    <app-contacts/>
  </div>
</template>

<script>
// import { contacts } from './services/Contacts'
// import { contacts } from '@/services/Contacts'
import AppContacts from  '@/components/AppContacts'
import AddContacts from  '@/components/AddContacts'

export default {
  name: 'app',
  components: {
    AppContacts,
    AddContacts,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
