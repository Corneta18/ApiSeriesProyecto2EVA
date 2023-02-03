
const Categoria = require('../models/categoria.model');

const categoriaCtrl = {};


categoriaCtrl.getCategoria = async (req, res) => {
    const categoria = await Categoria.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};



module.exports = categoriaCtrl;