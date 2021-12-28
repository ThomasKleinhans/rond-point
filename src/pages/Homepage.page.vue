<template>
  <q-page class="main-home">
    <q-header class="header q-pa-lg flex column items-center">
      <div class="full-width text-right">
        <img src="../assets/images/profile.svg" alt="">
      </div>
      <img src="../assets/images/logo.png" alt="" width="152" class="q-pt-md q-pb-lg">
      <p class="q-pt-sm">Est-ce que vous êtes sur Zillis ?</p>
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
      </div>
    </q-header>
    <div class="full-width">
      <q-card
        class="user-card justify-center full-width rounded flex no-wrap justify-between q-mb-lg"
        v-for="user in getAllOtherUsers" :key="user">
        <img src="../assets/images/avatar1.svg" alt="" class="avatar">
        <div class="user-info flex items-center justify-center">
          <p class="user-name full-width">{{ user.firstname + ' ' + user.lastname }}</p>
        </div>
        <button class="btn-notify">
          <img src="../assets/images/paperplane.svg" alt="">
        </button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: auto;

  .header {
    background: linear-gradient(0, rgba(18, 18, 18, 0) 0%, #121212 50%);
    max-width: 500px;
    margin: auto;
  }


  .rounded {
    border-radius: 15px;
  }

  .user-card {
    background-color: $dark-800;
    height: 100%;
    border-radius: 30px;
    padding: 12px;

    .avatar {
      width: 70px;
      height: 70px;
      object-fit: scale-down;
      border-radius: 20px;
    }

    .user-info {

      width: 45%;

      .user-name {
        font-weight: bold;
        margin-bottom: 0;
      }
    }

    .btn-notify {
      background: $primary;
      border: unset;
      padding: 12px;
      color: $white;
      border-radius: 0 20px 20px 0;

      img {
        vertical-align: middle;
      }
    }
  }

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
