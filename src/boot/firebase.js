import { boot } from 'quasar/wrappers'
import firebaseServices from "./../services/firebase"

export default boot(async ({app, router, store, Vue}) => {

  firebaseServices.fBInit(process.env.QENV.FIREBASE_CONFIG)
  firebaseServices.messaging(process.env.QENV.CLOUD_MESSAGING_API_KEY, process.env.SERVICE_WORKER_FILE)

  firebaseServices.auth().onAuthStateChanged((user) => {
    firebaseServices.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })

  store.$fb = firebaseServices
})