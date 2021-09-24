<template>
  <q-page class="main-register padding window-height q-mx-auto row justify-center items-center q-pa-md">
    <img src="../../assets/images/logo.png" alt="" width="152">
    <q-card class="row justify-center q-px-lg q-py-xl full-width rounded q-my-sm">
      <q-form @submit="onSubmit" class="full-width q-px-md">
        <div class="row content-center">
          <img src="../../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton prénom</label>
        </div>
        <q-input
          v-model="auth.firstName"
          borderless
          type="text"
          class="underline-input q-mb-md"
          placeholder="Prénom"
        />
        <div class="row content-center">
          <img src="../../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Nom</label>
        </div>
        <q-input
          v-model="auth.lastName"
          borderless
          type="text"
          class="underline-input q-mb-md"
          placeholder="Nom"
        />
        <div class="row content-center">
          <img src="../../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton blaz</label>
        </div>
        <q-input
          v-model="auth.email"
          borderless
          type="email"
          class="underline-input q-mb-md"
          placeholder="Email"
        />
        <div class="row content-center">
          <img src="../../assets/images/icon-padlock.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton code secret</label>
        </div>
        <q-input
          v-model="auth.password"
          borderless
          type="password"
          class="underline-input q-mb-md"
          placeholder="Mot de passe"
        />
        <div class="row content-center">
          <img src="../../assets/images/icon-padlock.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Confirme ton code secret</label>
        </div>
        <q-input
          v-model="auth.confirmPassword"
          borderless
          type="password"
          class="underline-input q-mb-md"
          placeholder="Mot de passe"
        />
      </q-form>
    </q-card>
    <div class="full-width ">
      <q-btn
        class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
        label="Valider"
        @click="onSubmit"
        color="primary"/>
      <q-btn :to="{ name:'login' }" class="btn-connect text-center q-mt-md full-width ">Se connecter ?</q-btn>
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
    ...mapActions( [ "registerUser" ] ),
    onSubmit() {
      this.registerUser( this.auth );
    },
  },
};
</script>

<style lang="scss" scoped>
.main-register {
  align-content: space-around;
  max-width: 500px;
  padding: 24px;

  .rounded {
    border-radius: 15px;
  }

  .btn-submit {
    font-size: 20px;
  }

  .btn-forget-pwd {
    text-transform: unset;

    &:before {
      box-shadow: unset;
    }
  }
}
</style>
