const authService = require('../services/auth')

const isAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'No tienes autorizacion' })
  }
  const token = req.headers.authorization.split(' ')[1]

  authService.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      console.log(response)
      res.status(401).send({ message: 'Falló autenticacion de token' })
    })
}

module.exports = isAuth
