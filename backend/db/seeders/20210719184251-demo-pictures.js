'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
    {
      userId: 1,
      title: "Batman was here",
      imageUrl: "https://images.hgmsites.net/hug/batmobile-recreation-photo-by-bonhams_100784755_h.jpg",
      description: "He is not real",
    }, 
    {
      userId: 1,
      title: "Bring back Lego Racing!",
      imageUrl: "https://media.istockphoto.com/photos/creator-ferrari-f40-picture-id506251488?k=6&m=506251488&s=612x612&w=0&h=A1Kh3WH_-I2e3mTg6S1MYxPh22Pp-8xCBzmxzj_UX2k=",
      description: "Lego racing was the best racing game during my childhood. They need to bring it back.",
    },
    {
      userId: 2,
      title: "A new road in life",
      imageUrl: "https://i.imgur.com/bRJ9Eki.jpeg",
      description: "Atigun Pass in the Arctic northernmost region of Alaska. The view at our destination, over 5,000 miles since we departed home. How did we get here? ",
    },
    {
      userId: 2,
      title: "we camped with friends our first night (and last night in California) on the Ocean",
      imageUrl: "https://i.imgur.com/5msbFqU.jpeg",
      description: "",
    },
    {
      userId: 2,
      title: "We departed San Francisco with some seriously loaded bikes.",
      imageUrl: "https://i.imgur.com/x4nYkym.jpeg",
      description: "Got divorced, lost my job, so me and my buddy got on our motorcycles and rode North to the Alaskan Arctic until the road ran out",
    },
    {
      userId: 2,
      title: "Crater Lake, Oregon",
      imageUrl: "https://i.imgur.com/JcX0Ux4.jpeg",
      description: "We took the roads less traveled by the most beautiful scenery",
    },
    {
      userId: 2,
      title: "We can see Canada from here",
      imageUrl: "https://i.imgur.com/WhjAhgz.jpeg",
      description: "",
    },
    {
      userId: 2,
      title: "Washington, Hurricane Ridge",
      imageUrl: "https://i.imgur.com/3M0gYr8.jpeg",
      description: "",
    },
    {
      userId: 2,
      title: "New Oregon friends",
      imageUrl: "https://i.imgur.com/eLRUofM.jpeg",
      description: "We met local wildlife and made friends",
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Photos', null, {});
  }
};
