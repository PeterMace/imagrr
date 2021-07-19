const express = require('express');
const asyncHandler = require('express-async-handler');
const {Photo} = require('./../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async function(req, res) {
        const photos = await Photo.findAll();
        return res.json(photos);
    })
  );

module.exports = router;