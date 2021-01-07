const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalSchema = new Schema({
  name: String,
  description: String,
  image: String,
  imageName: String,
  type: String
})

module.exports = mongoose.model('Animal', animalSchema)
