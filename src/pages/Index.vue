<template>
  <q-page class="flex flex-center">
        <q-btn v-if='!getAuthStatus' flat label="Se connecter" :to="{name : 'login'}" />
        <q-btn @click="logoutUser" v-else flat label="Se deconnecter" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  computed: {
    ...mapGetters(['getAuthStatus'])
  },
  methods: {
    ...mapActions([
      'logoutUser', 
    ])
  },
})
</script>
