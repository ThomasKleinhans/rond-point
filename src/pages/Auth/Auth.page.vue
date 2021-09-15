<template>
  <q-page class="flex flex-center">
        <q-btn flat label="Se connecter" :to="{name : 'login'}" />
        <q-btn flat label="Créer un compte" :to="{name : 'register'}" />
        <q-btn flat label="Se déconnecter" @click="logout()" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from "vuex";


export default defineComponent({
  name: 'PageIndex',
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
    },
  },
})
</script>
