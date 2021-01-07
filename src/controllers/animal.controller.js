const Animal = require('../models/animal')
const CONSTANTS = require('../config/constants')
const s3Service = require('../services/s3')
const animalCtrl = {}

animalCtrl.create = async (req, res) => {
  try {
    const { name, description, image, type, imageName } = req.body
    const newAnimal = new Animal({
      name,
      description,
      image,
      imageName,
      type
    })
    await newAnimal.save()
    res.json({ message: 'Animal registrado con éxito' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

animalCtrl.saveImage = async (req, res) => {
  try {
    const { file, fileName } = req.body
    const obj = {
      document: file,
      path: 'animals/',
      name: fileName
    }
    s3Service.saveObject(obj, (error, response) => {
      if (error) {
        console.log('Error s3:', error)
        return res.status(500).json({ message: 'Problemas con servicio de s3, favor intente más tarde' })
      } else {
        return res.status(200).json({ url: response.Location })
      }
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

animalCtrl.deleteOne = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id)
    res.json({ message: 'Animal eliminado' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

animalCtrl.getAll = async (req, res) => {
  try {
    const animals = await Animal.find({})
    res.json({ animals })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: CONSTANTS.TEMPLATES.MESSAGES.ERROR.DEFAULT_MESSAGE })
  }
}

module.exports = animalCtrl
