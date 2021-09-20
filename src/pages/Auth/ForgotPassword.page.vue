<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          v-model="auth.email"
          filled
          type="email"
          label="Email"
          lazy-rules
        />

        <div>
          <q-btn class="q-ma-xs" label="Reinitialiser" type="submit" color="primary" />
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
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["resetPassword"]),
    onSubmit() {
      this.resetPassword(this.auth);
    },
  },
};
</script>
