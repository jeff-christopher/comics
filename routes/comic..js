const express = require('express');

const router = express.Router();
const comicController = require('../controllers/comic');

router.get('/comic', comicController.getComics);
router.get('/comic/:id', comicController.editComic);
router.post('/comic', comicController.createComic);
router.put('/comic', comicController.ediComic);
router.delete('/comic', comicController.deleteComic);

module.exports = router;