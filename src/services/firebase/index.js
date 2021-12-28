import * as init from './init.js'
import * as auth from './auth.js'
import * as db from './db.js'
import * as messaging from './messaging.js'

export default Object.assign({}, init, auth, db, messaging)