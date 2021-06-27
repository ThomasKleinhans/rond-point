<template>
  <q-page class="flex flex-center">
        <q-btn flat label="Se connecter" :to="{name : 'login'}" />
        <q-btn flat label="Créer un compte" :to="{name : 'register'}" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
})
</script>
