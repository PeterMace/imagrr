'use strict';
const { User } = require("./user");
const { Photo } = require("./photo");
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 120],
      }
    },
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Photo, { foreignKey: 'photoId',  hooks: true });
  };
  return Comment;
};