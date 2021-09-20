import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from "./modules/auth"
import user from "./modules/user"

// import example from './module-example'

export default store(function () {
  const Store = createStore({
    modules: {
      auth,
      user
    },
    strict: process.env.DEV
  })

  return Store
})
