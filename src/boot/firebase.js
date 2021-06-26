import { boot } from 'quasar/wrappers'
import firebaseServices from "./../services/firebase"

export default boot(async ({app, router, store, Vue}) => {
  firebaseServices.fBInit(process.env.QENV.FIREBASE_CONFIG)
  store.$fb = firebaseServices
})