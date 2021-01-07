const AWS = require('aws-sdk')
const CONSTANTS = require('../config/constants')
const s3Service = {}

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID || CONSTANTS.S3.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY || CONSTANTS.S3.SECRET_ACCESS_KEY
})

const params = {
  Bucket: process.env.BUCKET || CONSTANTS.S3.BUCKET,
  Key: '',
  ACL: 'public-read'
}

s3Service.saveObject = (obj, callback) => {
  try {
    const s3 = new AWS.S3()
    const encodedDoc = obj.document
    const decodedDoc = Buffer.from(encodedDoc, 'base64')
    params.Body = decodedDoc
    params.Key = `${obj.path}${obj.name}`
    s3.upload(params).promise().then(res => {
      callback(null, res)
    }).catch(err => {
      callback(err)
    })
  } catch (err) {
    callback(err)
  }
}

s3Service.deleteObject = (obj, callback) => {
  try {
    const s3 = new AWS.S3()
    params.Key = `${obj.path}${obj.name}`
    delete params.Body
    delete params.ACL
    s3.deleteObject(params).promise().then(res => {
      callback(null, res)
    }).catch(err => {
      callback(err)
    })
  } catch (err) {
    console.log(`Error al eliminar objeto en s3: ${err}`)
    callback(err)
  }
}

module.exports = s3Service
