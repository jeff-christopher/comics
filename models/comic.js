module.exports = (sequelize, Sequelize) => {
    const Comic = sequelize.define("comic", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        printingday: {
            type: Sequelize.DATEONLY
        },
        synopsis: {
            type: Sequelize.STRING
        },
        editorial: {
            type: Sequelize.ENUM('MARVEL', 'DC Comics', 'IMAGE')
        }
    });

    return Comic;
};