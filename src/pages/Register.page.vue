<template>
  <q-page dark padding>
    <div dark class="q-pa-md" style="max-width: 400px">
      <q-form dark @submit="onSubmit" class="q-gutter-md">  
        <q-input
          v-model="auth.name"
          filled
          type="text"
          label="Name"
          lazy-rules
        />
        <q-input
          v-model="auth.email"
          filled
          type="email"
          label="Email"
          lazy-rules
        />

        <q-input
          v-model="auth.password"
          filled
          type="password"
          label="Mot de passe"
          lazy-rules
        />

        <q-input
          v-model="auth.confirmPassword"
          filled
          type="password"
          label="Confirmer le mot de passe"
          lazy-rules
        />

        <div>
          <q-btn outline class="q-ma-xs" label="Se connecter" :to="{ name:'login' }" color="primary" />
          <q-btn class="q-ma-xs" label="Créer un compte" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      auth: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit() {
      this.registerUser(this.auth);
    },
  },
};
</script>
