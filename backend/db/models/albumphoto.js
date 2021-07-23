'use strict';
const { Album } = require("./album");
const { Photo } = require("./photo");
module.exports = (sequelize, DataTypes) => {
  const AlbumPhoto = sequelize.define('AlbumPhoto', {
    photoId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  AlbumPhoto.associate = function(models) {
    AlbumPhoto.belongsTo(models.Album, { foreignKey: 'albumId',  hooks: true });
    AlbumPhoto.belongsTo(models.Photo, { foreignKey: 'photoId', hooks: true });
  };
  return AlbumPhoto;
};