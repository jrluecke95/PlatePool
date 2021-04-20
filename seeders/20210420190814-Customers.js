'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [{
      name: 'willie rose',
      email: "willierose87@gmail.com",
      password: '$2b$10$/8DySr9wBlA/.pg8Y4LsmOyNd2GMe4.zjjsDmMG.fBsmCIoWu6EOK', //password
      street: "2303 Trinity Manor Lane",
      zipcode: "77469",
      city: "Richmond",
      state: "TX",
      latitude: "29.566897164088495",
      longitude: "-95.71167527919002",
      createdAt: new Date(),
      updatedAt: new Date()
    }],
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
