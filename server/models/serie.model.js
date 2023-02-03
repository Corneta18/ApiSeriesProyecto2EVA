const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    nombre: {type: String, require: true},
    url: {type: String, require: true},
    genero: {type: String, require: true},
    capitulos: {type: Number, require: true},
    emision: {type: Number, require: true},
    sinopsis: {type: String, require: true},
    puntuacion: [{
        type: Number, require: false,
        type: String, require: false
    }]
})