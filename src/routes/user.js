const { Router } = require('express')
const api = Router()
const userCtrl = require('../controllers/user.controller')

api.post('/login', userCtrl.login)
api.post('/register', userCtrl.register)

module.exports = api
