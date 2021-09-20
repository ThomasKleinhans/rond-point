<style scoped>
.rounded {
  border-radius: 15px;
}
.btn-submit {
  font-size: 20px;
}

.main-connect {
  align-content: space-around;
  max-width: 500px;
}

.btn-connect {
  text-transform: unset;
}
.btn-connect:before {
  box-shadow: unset;
}

</style>

<template>
  <q-page class="main-connect padding window-height q-mx-auto row justify-center items-center q-pa-md">
    <img src="../assets/images/logo.png" alt="" width="152">
    <q-card class="row justify-center q-py-md q-px-md full-width rounded q-my-sm">
      <q-form dark @submit="onSubmit" class="full-width q-px-md">
        <div class="row content-center">
          <img src="../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton prénom</label>
        </div>
        <q-input
          v-model="auth.firstName"
          :dense="dense"
          type="text"
          class="q-mb-md"
          placeholder="Prénom"
        />
        <div class="row content-center">
          <img src="../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Nom</label>
        </div>
        <q-input
          v-model="auth.lastName"
          :dense="dense"
          type="text"
          class="q-mb-md"
          placeholder="Nom"
        />
        <div class="row content-center">
          <img src="../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton blaz</label>
        </div>
        <q-input
          v-model="auth.email"
          :dense="dense"
          type="email"
          class="q-mb-md"
          placeholder="Email"
        />
        <div class="row content-center">
          <img src="../assets/images/icon-padlock.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton code secret</label>
        </div>
        <q-input
          v-model="auth.password"
          :dense="dense"
          type="password"
          class="q-mb-md"
          placeholder="Mot de passe"
          />
        <div class="row content-center">
          <img src="../assets/images/icon-padlock.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Confirme ton code secret</label>
        </div>
        <q-input
          v-model="auth.confirmPassword"
          :dense="dense"
          type="password"
          class="q-mb-md"
          placeholder="Mot de passe"
        />
      </q-form>
    </q-card>
    <div class="full-width ">
      <q-btn
        class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
        label="Valider"
        type="submit"
        color="primary"/>
      <q-btn :to="{ name:'login' }"  class="btn-connect text-center q-mt-md full-width ">Se connecter ?</q-btn>
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
