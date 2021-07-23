const { check } = require('express-validator');
const { handleValidationErrors } = require('./../utils/validation');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must put a valid ID to update');
const photoId = check('photoId')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must put a valid ID to update');
const userId = check('userId')
  .notEmpty()
  .isInt({ min: 0 })
  .withMessage('You must be signed in.');
const content = check('content')
  .isLength({ min: 0, max:255 })
  .withMessage('Comment must be less than 255 characters');

  exports.validateCreate = [
    userId,
    photoId,
    content,
    handleValidationErrors,
  ];

  exports.validateUpdate = [
    id,
    content,
    handleValidationErrors,
  ];