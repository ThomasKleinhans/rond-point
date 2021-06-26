const ENV = require('dotenv').config().parsed

module.exports = (QENV) => {
  if (!['DEV', 'STAGE', 'PROD'].includes(QENV)) {
    throw Error('Unknonw or not supplied environment variable')
  }
  return {
    FIREBASE_CONFIG: {
      apiKey: ENV[`${QENV}_API_KEY`],
      authDomain: ENV[`${QENV}_AUTH_DOMAIN`],
      databaseURL: ENV[`${QENV}_DATA_BASE_URL`],
      projectId: ENV[`${QENV}_PROJECT_ID`],
      storageBucket: ENV[`${QENV}_STORAGE_BUCKET`],
      messagingSenderId: ENV[`${QENV}_MESSAGING_SENDER_ID`],
      appId: ENV[`${QENV}_APP_ID`]
    }
  }
}