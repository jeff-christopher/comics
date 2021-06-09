const User = require('../models/user');

exports.getUser = async(req, res, next) => {
    const user = req.user;
    try {
        const data = await User.findByPk(user);
        res.status(200).json({
            ok: true,
            user: data,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.createUser = async(req, res, next) => {
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const fechaNacimiento = req.body.fechaNac;
    const sexo = req.body.sexo;

    try {
        const userSaved = await User.create({
            name: nombre,
            user: usuario,
            password: password,
            birthday: fechaNacimiento,
            sex: sexo
        });

        res.status(200).json({
            ok: true,
            data: userSaved,
        });

    } catch (error) {
        console.log(error);
    }

};