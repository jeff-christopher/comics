const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/user/:id', userController.getUser);
router.post('/user', userController.createUser);

module.exports = router;