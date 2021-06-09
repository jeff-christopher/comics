const Comic = require('../models/comic');

exports.getComics = async(req, res, next) => {
    try {
        const data = await Comic.findAll();
        res.status(200).json({
            ok: true,
            data: data,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getComic = async(req, res, next) => {
    const User = req.user;
    try {
        const data = await User.getComics();
        res.status(200).json({
            ok: true,
            user: data,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.createComic = async(req, res, next) => {
    const User = req.user;
    const nombre = req.body.nombre;
    const fechaImpresion = req.body.fechaImpresion;
    const synopsis = req.body.sinopsis;
    const editorial = req.body.editorial;

    try {
        const comicSaved = await User.createComic({
            name: nombre,
            printingday: fechaImpresion,
            synopsis: synopsis,
            editorial: editorial
        });

        res.status(200).json({
            ok: true,
            data: comicSaved,
            message: 'Comic fue ingresado exitosamente.'
        });

    } catch (error) {
        console.log(error);
    }

};