const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');
const {json} = require('express');


//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/', (req,res)=> res.send('Series in /api/apiseries'));
app.use('api/apiseries', require('./routes/series.route'))

app.use('/', (req, res) => res.send('Categorias in /api/apicategorias'))
app.use('api/apicategorias', require('./routes/categoria.route'))


//Start the server
app.listen(app.get('port'), () => {
    console.log('Server en puerto: ', app.get('port'));
})