const mongoose = require('mongoose');
const URI = 'mongodb+srv://apiseries:apiseries@cluster0.sv2xygh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI).then(db => console.log('DB connected')).catch(err => console.log(err));

module.exports = mongoose;