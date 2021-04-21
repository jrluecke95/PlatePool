'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plates', [{
      name: 'burger',
      price: 5,
      description: 'juicy burger',
      cuisine: "American",
      quantity: 5,
      allergenInfo: "",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fries',
      price: 5,
      description: 'salty ass fries',
      cuisine: "American",
      quantity: 5,
      allergenInfo: "Vegan",
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Steak',
      price: 10,
      description: 'medium rare steak',
      cuisine: "American",
      quantity: 5,
      allergenInfo: "",
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Soup',
      price: 7,
      description: 'veggie soup',
      cuisine: "American",
      quantity: 5,
      allergenInfo: "Vegatarian",
      UserId: 1,
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
