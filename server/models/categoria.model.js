const mongoose = require('mongoose');
const {Schema} = mongoose;


const categoriaSchema = new Schema({
    nombre: {type: String, require: true},
    url: {type: String, require: true}
})