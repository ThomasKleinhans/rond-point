<template>
  <q-page class="main-connect window-height q-mx-auto row justify-center items-center">
    <img src="../../assets/images/logo.png" alt="" width="152">
    <q-form class="full-width">
      <q-card class="justify-center q-px-lg q-py-xl full-width rounded">
        <div class="row content-center">
          <img src="../../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton blaz</label>
        </div>
        <q-input
          borderless
          v-model="auth.email"
          type="email"
          class="q-mb-xl underline-input"
          placeholder="Email"
        />
        <div class="row content-center">
          <img src="../../assets/images/icon-padlock.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton code secret</label>
        </div>
        <q-input
          borderless
          class="underline-input"
          v-model="auth.password"
          type="password"
          placeholder="Mot de passe"
        />
      </q-card>
    </q-form>
    <div>
      <q-btn
        class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
        label="Se connecter"
        color="primary"
        @click="onSubmit"/>
      <q-btn :to="{ name:'forgot-password' }" class="btn-forget-pwd text-center q-mt-md full-width ">
        Mot de passe oublié ?
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions( [ "loginUser" ] ),
    onSubmit() {
      this.loginUser( this.auth );
    },
  },
};
</script>

<style lang="scss" scoped>
.main-connect {
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
