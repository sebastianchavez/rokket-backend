const CONSTANTS = require('./constants')

if (process.env.NODE_ENV === 'prod') {
  require('dotenv').config()
  console.log('Ambiente Produccion')
} else {
  console.log('Ambiente Desarrollo')
}

module.exports = {
  PORT: process.env.PORT || CONSTANTS.SERVER.PORT,
  DB: process.env.DB_HOST || CONSTANTS.SERVER.DB_HOST,
  SECRET_TOKEN: process.env.SECRECT_TOKEN || CONSTANTS.SERVER.SECRET_TOKEN
}
