const express = require('express');
const asyncHandler = require('express-async-handler');
const {Comment} = require('./../../db/models');

const commentValidations = require('../../validations/comments');

const router = express.Router();

router.get(
    '/', 
    asyncHandler(async function(req, res) {
        const comments = await Comment.findAll();
        return res.json(comments);
    })
  );

  router.get(
    '/:id',
    asyncHandler(async function(req, res) {
        const comment = await Comment.findByPk(req.params.id);
        return res.json(comment);
    })
  );

  router.put(
    '/:id', commentValidations.validateUpdate,
    asyncHandler(async function(req, res, next) { 
        console.log("route hit");
      try{
        const updatedComment = await Comment.findByPk(req.params.id);
        await updatedComment.update(req.body);
        return res.json(updatedComment);
      } catch (err){
        next(err);
      }
    })
  );



  router.delete(
    '/:id', 
    asyncHandler(async function(req, res) {
    const comment = await Comment.findByPk(req.params.id);
    comment.destroy();
    return res.json(req.body);
  })
);

module.exports = router;