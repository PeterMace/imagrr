const express = require('express');
const asyncHandler = require('express-async-handler');
const {Photo} = require('./../../db/models');


const { check, validationResult } = require('express-validator');
const photoValidations = require('../../validations/photos');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async function(req, res) {
        const photos = await Photo.findAll();
        return res.json(photos);
    })
  );

  router.put(
    '/:id', photoValidations.validateUpdate,
    asyncHandler(async function(req, res) { 
        const updatedPhoto = await Photo.findByPk(req.params.id);
        await updatedPhoto.update(req.body);
        return res.json(updatedPhoto);
    })
  );

  router.post(
    '/', //photoValidations.validateCreate,
    asyncHandler(async function(req, res) {
        await Photo.create(req.body);
        return res.json(req.body);
    })
  );

  router.delete(
    '/:id', 
    asyncHandler(async function(req, res) {
      await Photo.destroy({
          where: { id : req.params.id }
        });
     return res.json(req.body);
  })
);

module.exports = router;