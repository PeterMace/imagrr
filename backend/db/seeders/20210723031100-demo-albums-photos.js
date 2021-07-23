'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AlbumPhotos', [
      {
        photoId: 1,
        albumId: 1
      },
      {
        photoId: 2,
        albumId: 2
      },
      {
        photoId: 3,
        albumId: 2
      },
      {
        photoId: 4,
        albumId: 1
      },
      {
        photoId: 5,
        albumId: 3
      },
      {
        photoId: 6,
        albumId: 3
      },
      {
        photoId: 7,
        albumId: 3
      },
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AlbumPhotos', null, {});
  }
};
