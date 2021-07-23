'use strict';
const { AlbumPhoto } = require("./albumphoto");
const { User } = require("./album");
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
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
    Album.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade',  hooks: true });
    Album.hasMany(models.AlbumPhoto, { foreignKey: 'albumId', onDelete: 'cascade',  hooks: true });
  };
  return Album;
};