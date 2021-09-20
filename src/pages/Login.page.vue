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

.btn-forget-pwd {
  text-transform: unset;
}

.btn-forget-pwd:before {
  box-shadow: unset;
}
</style>
<template>
  <q-page class="main-connect padding window-height q-mx-auto row justify-center items-center q-pa-md">
    <img src="../assets/images/logo.png" alt="" width="152">
    <q-form @submit="onSubmit" class="full-width">
      <q-card class="justify-center q-py-xl q-px-xl full-width rounded">
        <div class="row content-center">
          <img src="../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton blaz</label>
        </div>
        <q-input
          v-model="auth.email"
          :dense="dense"
          type="email"
          class="q-mb-xl"
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
          placeholder="Mot de passe"
        />
      </q-card>
      <q-btn
        class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
        label="Se connecter"
        type="submit"
        color="primary"
        @click="onSubmit"/>

      <q-btn :to="{ name:'login' }" class="btn-forget-pwd text-center q-mt-md full-width ">Mot de passe oublié ?</q-btn>
    </q-form>
    <div class="full-width ">

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
