const express = require('express')
const seriesCtrl = require('../controllers/serie.controller')
const router = express.Router();

//EndPoints
router.get('/',seriesCtrl.getSeries);
router.get('/serie/:id', seriesCtrl.getSerie);
router.get('/categoria/:id', seriesCtrl.getCategoria);


module.exports = router;