const express = require('express');
const asyncHandler = require('express-async-handler');
const {Album} = require('./../../db/models');


const { check, validationResult } = require('express-validator');
const albumValidations = require('../../validations/albums');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async function(req, res) {
        const Albums = await Album.findAll();
        return res.json(Albums);
    })
  );

  router.get(
    '/:id',
    asyncHandler(async function(req, res) {
        const Album = await Album.findByPk(req.params.id);
        return res.json(Album);
    })
  );

  router.put(
    '/:id', albumValidations.validateUpdate,
    asyncHandler(async function(req, res, next) { 
      try{
        const updatedAlbum = await Album.findByPk(req.params.id);
        await updatedAlbum.update(req.body);
        return res.json(updatedAlbum);
      } catch (err){
        next(err);
      }
    })
  );

  router.post(
    '/', albumValidations.validateCreate,
    asyncHandler(async function(req, res, next) {
      try{
        const newAlbum = await Album.create(req.body);
        return res.json(newAlbum);
      } catch (err){
        next(err);
      }
    })
  );

  router.delete(
    '/:id', 
    asyncHandler(async function(req, res) {
      await Album.destroy({
          where: { id : req.params.id }
        });
     return res.json(req.body);
  })
);

module.exports = router;