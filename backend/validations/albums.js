const { check } = require('express-validator');
const { handleValidationErrors } = require('./../utils/validation');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must put a valid ID to update');
const userId = check('userId')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must be signed in.');
const title = check('title')
  .notEmpty()
  .isLength({ min: 3, max:120 })
  .withMessage('Please provide a title at least 3 characters long');
const albumId = check('albumId')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must put a valid album ID to update');
const photoId = check('photoId')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must put a valid ID to update');
const description = check('description')
  .isLength({ min: 0, max:255 })
  .withMessage('Description must be less than 255 characters');


  exports.validateCreate = [
    userId,
    title,
    description,
    handleValidationErrors,
  ];

  exports.validateUpdate = [
    id,
    userId,
    title,
    description,
    handleValidationErrors,
  ];

  exports.validateAdd = [
    albumId,
    photoId,
    handleValidationErrors,
  ];

  exports.validateRemove = [
    albumId,
    photoId,
    handleValidationErrors,
  ];