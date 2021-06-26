import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from "./modules/auth"

// import example from './module-example'

export default store(function () {
  const Store = createStore({
    modules: {
      auth
    },
    strict: process.env.DEV
  })

  return Store
})
