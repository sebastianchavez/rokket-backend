const { Router } = require('express')
const api = Router()
const auth = require('../middlewares/auth')
const animalCtrl = require('../controllers/animal.controller')

api.get('/get-all', auth, animalCtrl.getAll)
api.post('/create', auth, animalCtrl.create)
api.put('/save-image', auth, animalCtrl.saveImage)
api.delete('/delete/:id', auth, animalCtrl.deleteOne)

module.exports = api
