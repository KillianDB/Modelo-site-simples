//Importar express e controllers

const express = require('express');

const GeralController = require('./controllers/GeralController');

//Iniciar roteador

const router = express.Router();

//Definir rotar

router.get('/', GeralController.home);

//Exportar o roteador

module.exports = router;