'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        photoId: 1,
        content: "When I am grown up, I wanna be batman!"
      },
      {
        userId: 2,
        photoId: 1,
        content: "Batman isn't real stupid."
      },
      {
        userId: 3,
        photoId: 2,
        content: "That car looks sick."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
