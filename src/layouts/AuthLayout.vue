<template>
  <q-layout dark view="lHh Lpr lFf">
    <q-page-container dark>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
