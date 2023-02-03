const express = require('express')
const categoriaCtrl = require('../controllers/categoria.model')
const router = express.Router();

//EndPoints
router.get('/', categoriaCtrl.getCategoria);


module.exports = router;