<template>
  <q-page class="flex flex-center">
        <q-btn flat label="Se connecter" :to="{name : 'login'}" />
        <q-btn flat label="Créer un compte" :to="{name : 'register'}" />
        <q-btn v-if="getUserUID != ''" flat label="Se déconnecter" @click="logout()" />
        <q-btn flat label="Disponible" @click="setUserAvailibility({uid: getUserUID, availability: true})" />
        <q-btn flat label="Indisponible" @click="setUserAvailibility({uid: getUserUID, availability: false})"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
    methods: {
      ...mapActions([
        "setUserAvailibility",
        "logoutUser"
      ]),
      logout() {
        this.logoutUser();
      },
    },
    computed: {
      ...mapGetters([
        'getUserUID',
      ])
    },
})
</script>
