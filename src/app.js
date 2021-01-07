const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { PORT } = require('./config/server')

// settings
app.set('port', PORT)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

// routes
app.use('/api/users', require('./routes/user'))
app.use('/api/animals', require('./routes/animal'))

module.exports = app
