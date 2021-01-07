module.exports = {
  TEMPLATES: {
    MESSAGES: {
      ERROR: {
        DEFAULT_MESSAGE: 'En estos momentos existen dificultades, intente mas tarde'
      }
    }
  },
  SERVER: {
    PORT: 3002,
    DB_HOST: 'mongodb://localhost/rokket',
    SECRET_TOKEN: 'tokenrokketaproyectobackend'
  },
  S3: {
    ACCESS_KEY_ID: '',
    SECRET_ACCESS_KEY: '',
    BUCKET: 'rokket-storage'
  }
}
