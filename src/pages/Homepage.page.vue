<template>
  <q-page class="main-home">
    <img src="../assets/images/logo.png" alt="" width="152">
    <p>Est-ce que vous êtes sur Zillis ?</p>
    <div class="container-switch q-pa-sm flex full-width">
      <button
        class="available full-height w-50"
        :class="{active: getAvailability}"
        @click="setActiveButton">
        Dispo
      </button>
      <button
        class="not-available full-height w-50"
        :class="{active: !getAvailability}"
        @click="setActiveButton">
        Pas dispo
      </button>

      <q-card v-for="user in getAllOtherUsers" :key="user">
        {{ user.name }}
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'Homepage',

  methods: {
    ...mapActions( [
      'setUserAvailability',
      'fetchAllOtherUsers'
    ] ),

    setActiveButton: function () {
      this.setUserAvailability( { uid: this.getUserUID, availability: !this.getAvailability } )
    }
  },

  computed: {
    ...mapGetters( [
      'getUserUID',
      'getAvailability',
      'getAllOtherUsers'
    ] )
  },

  mounted() {
    this.fetchAllOtherUsers();
  }
}
</script>

<style lang="scss" scoped>
.main-home {
  padding: 24px;

  .container-switch {
    border-radius: 20px;
    background: $dark-800;
    height: 80px;

    .w-50 {
      width: 50%;
    }

    button {
      width: 0;
      border-radius: 15px;
      border: unset;
      background-color: unset;
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 600;
      position: relative;
      z-index: 5;
      color: $dark-600;


      &:before {
        transition: width .2s ease-in-out;
      }

      &:before {
        content: '';
        z-index: -1;
        display: block;
        position: absolute;
        width: 0;
      }

      &.active.available {
        color: white;
      }

      &.active:before {
        height: 100%;
        width: 100%;
        border-radius: 15px;
      }

      &.not-available:before {
        top: 0;
        left: 0;
      }

      &.available:before {
        top: 0;
        right: 0;
      }

      &.active.not-available:before {
        background-color: $dark-700;
        opacity: 60%;
      }

      &.active.available:before {
        background: $primary;
      }
    }

  }
}
</style>
