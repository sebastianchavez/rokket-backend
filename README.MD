# CIISA Backend

Proyecto Backend con NodeJS para Rokket Labs el cual contiene resolucion de prueba tecnica

## Comenzando 🚀

+ [Descargar desde github](https://github.com/sebastianchavez/rokket-backend.git) 


### Pre-requisitos 📋
Es necesario tener instalado NodeJs
En lo posible última versión de NodeJs: https://nodejs.org/es/

Para despliegue de aplicación es necesario contar con PM2: https://pm2.keymetrics.io/

```
npm install pm2 -g
```

### Instalación 🔧

Una vez instalado NodeJs ejecutar comando
```
npm install
```

## Despliegue 📦

Para despliegue de la aplicación para conceptos de pruebas o desarrollo ejecutar comandos
```
npm run dev
```
ó
```
npm start
```

Para producción ejecutar
```
pm2 start index.js
```
También es necesario contar con variables de entornos declaradas en "config/server.js"

## Construido con 🛠️

* [Express](https://expressjs.com/es/) - Framework para construcción de API's
* [Mongoose](https://mongoosejs.com/) - ORM

## Versionado 📌

Usamos [GIT](https://git-scm.com/) para el versionado. [repositorio](https://github.com/sebastianchavez/rokket-backend).


## Licencia 📄

Este proyecto está bajo la Licencia (ISC)