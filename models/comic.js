const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');

const Comic = sequelize.define("comic", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    printingday: {
        type: DataTypes.DATEONLY
    },
    synopsis: {
        type: DataTypes.STRING
    },
    editorial: {
        type: DataTypes.ENUM('MARVEL', 'DC Comics', 'IMAGE')
    }
});

module.exports = Comic;