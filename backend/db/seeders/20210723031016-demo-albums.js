'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: "Road trip to no-where",
        description: "Oregon roadtrip"
      },
      {
        userId: 2,
        title: "Favorite Cars",
        description: "these cars are awesome"
      },
      {
        userId: 1,
        title: "Nature",
      }
    ], {});

   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
