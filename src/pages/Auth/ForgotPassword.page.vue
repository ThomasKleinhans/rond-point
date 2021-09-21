<style lang="scss" scoped>
.main-forgot-pwd {
  align-content: space-around;
  max-width: 500px;
  padding: 24px;

  .rounded {
    border-radius: 15px;
  }

  .underline-input {
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 100%;
      background: $primary;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      opacity: 100%;
    }
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

<template>
  <q-page class="main-forgot-pwd window-height q-mx-auto row justify-center items-center">
    <img src="../../assets/images/logo.png" alt="" width="152">
    <q-form @submit="onSubmit" class="full-width">
      <q-card class="justify-center q-px-lg q-py-xl full-width rounded">
        <div class="row content-center">
          <img src="../../assets/images/icon-user.svg" alt="">
          <label class="text-uppercase text-bold q-pl-sm">Ton blaz</label>
        </div>
        <q-input
          v-model="auth.email"
          borderless
          class="underline-input"
          type="email"
          label="Email"
        />
      </q-card>
    </q-form>
    <q-btn
      class="q-ma-xs full-width q-py-md rounded btn-submit text-bold"
      label="Reinitialiser"
      type="submit"
      color="primary"/>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      auth: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions( [ "resetPassword" ] ),
    onSubmit() {
      this.resetPassword( this.auth );
    },
  },
};
</script>
