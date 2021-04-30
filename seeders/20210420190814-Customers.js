'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Willie Rose',
      email: "willierose87@gmail.com",
      password: '$2b$10$/8DySr9wBlA/.pg8Y4LsmOyNd2GMe4.zjjsDmMG.fBsmCIoWu6EOK', //password
      street: "2303 Trinity Manor Lane",
      zipcode: "77469",
      city: "Richmond",
      state: "TX",
      latitude: "29.566897164088495",
      longitude: "-95.71167527919002",
      profilePic: 'https://platepool.s3.amazonaws.com/profilePics/1619714966104.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jake Luecke',
      email: "jrluecke95@gmail.com",
      password: '$2b$10$/8DySr9wBlA/.pg8Y4LsmOyNd2GMe4.zjjsDmMG.fBsmCIoWu6EOK', //password
      street: "267 Chicamauga Ave SW",
      zipcode: "303114",
      city: "Atlanta",
      state: "GA",
      latitude: "33.74802414086276",
      longitude: "-84.43161906687209",
      profilePic: 'https://platepool.s3.amazonaws.com/profilePics/1619713209792.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Andres Icedo',
      email: "andresicedo24@gmail.com",
      password: '$2b$10$/8DySr9wBlA/.pg8Y4LsmOyNd2GMe4.zjjsDmMG.fBsmCIoWu6EOK', //password
      street: "411 Highland Cross Dr",
      zipcode: "77073",
      city: "Houston",
      state: "TX",
      latitude: "30.026150",
      longitude: "-95.423050",
      profilePic: 'https://platepool.s3.amazonaws.com/profilePics/1619794041754.JPG',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kendall Oliver',
      email: "kndllransom93@gmail.com",
      password: '$2b$10$eIhcwHttfgXHq/r03sKYWORgVrgv12g92.2yOgOvrXjRtxb9cx/SK', //password
      street: "25554 Pitchfork Ranch Pl",
      zipcode: "77493",
      city: "Katy",
      state: "TX",
      latitude: "null",
      longitude: "null",
      profilePic: 'https://platepool.s3.amazonaws.com/profilePics/1619795930241.jpeg',
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
