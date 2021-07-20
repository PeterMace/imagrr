const { check } = require('express-validator');
const { handleValidationErrors } = require('./../utils/validation');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 });
const userId = check('userId')
  .notEmpty()
  .isInt({ min: 0 });
const title = check('title')
  .notEmpty();
const imageUrl = check('imageUrl')
  .notEmpty()
  .isURL({ require_protocol: false, require_host: false });


  exports.validateCreate = [
    userId,
    title,
    imageUrl,
    handleValidationErrors,
  ];

  exports.validateUpdate = [
    id,
    userId,
    title,
    imageUrl,
    handleValidationErrors,
  ];