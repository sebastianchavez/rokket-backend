const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user')
const authService = require('../services/auth')
const CONSTANTS = require('../config/constants')
const userCtrl = {}

userCtrl.register = async (req, res) => {
  try {
    const { email, password } = req.body
    const newUser = new User({
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    })
    await newUser.save()
    res.json({ message: 'Usuario registrado con éxito' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

userCtrl.login = async (req, res) => {
  try {
    console.log('BODY:', req.body)
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.json({ message: 'Usuario autenticado con éxito', accessToken: authService.createToken(user) })
      } else {
        res.status(400).json({ message: 'Contraseña incorrecta' })
      }
    } else {
      res.status(404).json({ message: 'No existe usuario con este correo' })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

module.exports = userCtrl
