const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.ENUM('masculino', 'femenino')
    }
});

module.exports = User;