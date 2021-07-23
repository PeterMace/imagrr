'use strict';
const { User } = require("./user");
const { Comments } = require("./comment");
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: User}
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 120],
      }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
      }
    }
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
    Photo.hasMany(models.AlbumPhoto, { foreignKey: 'albumId',  onDelete: 'cascade'  });
    Photo.hasMany(models.Comment, { foreignKey: 'photoId',  onDelete: 'cascade'  });
  };
  return Photo;
};