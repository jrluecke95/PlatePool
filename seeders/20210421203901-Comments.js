'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [{
      text: 'this was great! thanks for posting',
      UserId: 2,
      PlateId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'this was not good. burgers were too dry!',
      UserId: 3,
      PlateId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'perfect poached eggs! thanks for this!',
      UserId: 2,
      PlateId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: "very good! i've always struggled with these",
      UserId: 3,
      PlateId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'this was the BEST bacon ever!',
      UserId: 2,
      PlateId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'love this plate! thanks so much',
      UserId: 1,
      PlateId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
  )},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
