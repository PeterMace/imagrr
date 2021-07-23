const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photosRouter = require('./photos.js');
const albumsRouter = require('./albums.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photos', photosRouter);

router.use('/albums', albumsRouter);

router.use('/comments', albumsRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;