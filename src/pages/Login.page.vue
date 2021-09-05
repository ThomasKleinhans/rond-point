<style scoped>
.rounded {
  border-radius: 15px;
}
.btn-submit {
  font-size: 20px;
}

.main-connect {
  align-content: space-around;
}
</style>
<template>
  <q-page class="main-connect padding window-height window-width row justify-center items-center q-pa-md">
    <img src="../assets/images/logo.png" alt="" width="152">
    <q-card class="row justify-center q-py-xl q-px-md full-width rounded">
      <q-form @submit="onSubmit" class="full-width q-px-md">
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
      </q-form>
    </q-card>
    <div class="full-width ">
      <q-btn
        class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
        label="Se connecter"
        type="submit"
        color="primary"/>
      <p class="text-center q-mt-md">Mot de passe oublié ?</p>
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
