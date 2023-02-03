
const Serie = require('../models/serie.model');

const serieCtrl = {};

// Función que devuelve todas las películas
serieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una película dada un id
serieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Movie doesnt exist'})
        })
        .catch(err => console.log(err));
}

// Añadir una nueva película a nuestra base de datos
serieCtrl.addMovie = async (req,res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then(() =>
            res.json({status: 'Movie Successfully Inserted '}))
        .catch(err => res.send(err.message));
}

// Función para actualizar una película con el id y la película con
// los nuevos datos
serieCtrl.updateMovie = async (req, res) => {
    const movie = req.body;
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'Movie Successfully

                Updated',data})

                else res.json({status: 'Movie doesnt exist'})
            })
                .catch(err => res.send(err.message));
        }
        }

// Función para borrar una película dada un id
    serieCtrl.deleteMovie = async (req, res) => {
        await Movie.findByIdAndDelete(req.params.id)
            .then((data) =>
            {

                if(data!=null) res.json({status: 'Movie Successfully

                    Deleted'})

                    else res.json({status: 'Movie doesnt exist'})
                })
                    .catch(err => res.send(err.message));
            }

// Función para obtener los diferentes géneros de la DB
        serieCtrl.getGenres = async (req,res) => {
            await Movie.find().distinct('genres')
                .then((data) => res.json(data))
                .catch((err) => console.error(err));
        }

        module.exports = movieCtrl;
    }