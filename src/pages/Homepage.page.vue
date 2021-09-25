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
    </div>
    <q-card
      class="user-card justify-center q-pa-md full-width rounded flex no-wrap justify-between items-center"
      v-for="user in getAllOtherUsers" :key="user">
      <img src="../assets/images/logo.png" alt="" class="avatar">
      <div class="user-info">
        <p class="user-name w-50">{{ user.name }}</p>
      </div>
      <div>
        <button class="btn-notify">
          Envoyer
        </button>
      </div>
    </q-card>
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

  .avatar {
    width: 70px;
    height: 70px;
    object-fit: scale-down;
  }

  .rounded {
    border-radius: 15px;
  }

  .user-card {
    background-color: $dark-800;

    .user-name {
      font-weight: bold;
      margin-bottom: 0;
    }

    .btn-notify {
      width: 45px;
      background: $primary;
      border: unset;
      border-radius: 0 20px 20px 0;
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
