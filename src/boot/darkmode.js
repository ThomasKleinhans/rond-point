import { boot } from 'quasar/wrappers'
import { Dark } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Dark.set(true)
})
