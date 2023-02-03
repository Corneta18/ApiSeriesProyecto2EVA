const express = require('express')
const seriesCtrl = require('../controllers/serie.controller')
const router = express.Router();

//EndPoints
router.get('/',seriesCtrl.getSeries);
router.get('/serie/:id', seriesCtrl.getSerie);
router.put('/',seriesCtrl.updateSerie);
router.get('/generos', seriesCtrl.getGeneros);


module.exports = router;