
const Serie = require('../models/serie.model');

const serieCtrl = {};

// Función que devuelve todas las películas
serieCtrl.getSeries = async (req, res) => {
    const movies = await Movie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una película dada un id
serieCtrl.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Movie doesnt exist'})
        })
        .catch(err => console.log(err));
}

// Añadir una nueva película a nuestra base de datos
serieCtrl.addSerie = async (req,res) => {
    const myMovie = new Serie(req.body);
    await myMovie.save()
        .then(() =>
            res.json({status: 'Movie Successfully Inserted '}))
        .catch(err => res.send(err.message));
}

serieCtrl.getCategoria = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Movie doesnt exist'})
        })
        .catch(err => console.log(err));
}

module.exports = serieCtrl;