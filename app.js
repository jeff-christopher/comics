const express = require('express');
const sequelize = require('./util/db');
const User = require('./models/user');
const Comic = require('./models/comic');
const cors = require('cors');

const app = express();
const port = 3000;

const userRoutes = require('./routes/user');
const comicRoutes = require('./routes/comic');

app.use(cors());
app.use(express.json());
app.use(async(req, res, next) => {
    req.user = await User.findByPk(1);
    next();
});

app.get('/', (req, res) => {
    res.send('Hellow World!!');
});

Comic.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Comic);

app.use(userRoutes);
app.use(comicRoutes);

sequelize.sync({ force: false })
    .then(
        response => {
            return User.findByPk(1);
        }
    )
    .then(
        user => {
            if (!user) {
                return User.create({
                    name: 'Jeff',
                    user: 'JCOS',
                    password: 'test123',
                    birthday: '16/05/1995',
                    sex: 'masculino'
                });
            } else {
                return user;
            }
        }
    )
    .then(
        response => {
            app.listen(port, () => {
                console.log(`Comics app up and running at http://localhost:${port}`);
            });
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    );