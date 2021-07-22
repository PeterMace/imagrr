'use strict';
const { AlbumPhoto } = require("./albumphoto");
const { User } = require("./album");
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    usedId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 120],
      }
    },
    description: DataTypes.STRING,
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.hasMany(models.AlbumPhoto, { foreignKey: 'albumId' });
  };
  return Album;
};