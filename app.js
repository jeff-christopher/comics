const { response } = require('express');
const express = require('express');
const db = require('./models/index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hellow World!!');
});

db.sequelize.sync({ force: true })
    .then(response => {
        app.listen(port, () => {
            console.log(`Comics app up and running at http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.log(error);
    });