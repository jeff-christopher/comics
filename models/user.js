module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        user: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATEONLY
        },
        sex: {
            type: Sequelize.ENUM('masculino', 'femenino')
        }
    });

    return User;
};