'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlbumPhotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Photos",
          },
        },
      },
      albumId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Albums",
          },
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    },
    { indexes: [
      {
        name: 'photoAlbumIndex',
        unique: true,
        fields: ['photoId', 'albumId']
      },
    ]
  }

    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AlbumPhotos');
  }
};