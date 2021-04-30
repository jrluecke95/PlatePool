'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plates', [{
      name: 'Cheeseburger',
      price: 5,
      description: 'Homemade grass-fed beef burger cooked to a perfect medium level of doneness. Guaranteed to knock your socks off!',
      cuisine: "American",
      quantity: 8,
      allergenInfo: "Keto (with no bun)",
      isForSale: true,
      foodPic: 'https://platepool.s3.amazonaws.com/foodPics/1619794758789.jpg',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'French Fries',
      price: 5,
      description: "Fresh french fries! Can be done in a deep fryer or air fryer. Perfectly seasoned and crunchy - get them while they're hot!",
      cuisine: "American",
      quantity: 10,
      allergenInfo: "Vegan",
      isForSale: true,
      foodPic: 'https://platepool.s3.amazonaws.com/foodPics/1619794782083.jpg',
      UserId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Steak',
      price: 15,
      description: 'USDA grass-fed ribeye that is cooked to a perfect medium rare. This will be a treat!',
      cuisine: "American",
      quantity: 5,
      allergenInfo: "Keto, Carnivore",
      isForSale: true,
      UserId: 2,
      foodPic: 'https://platepool.s3.amazonaws.com/foodPics/1619794801475.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vegetable Soup',
      price: 6,
      description: "A delicious bowl of vegetable soup that is guaranteed to warm your soul. No meat and vegetable stock, so it's perfect for all the vegans and vegetarians out there!",
      cuisine: "American",
      quantity: 5,
      allergenInfo: "Vegatarian, Vegan",
      isForSale: false,
      UserId: 1,
      foodPic: 'https://platepool.s3.amazonaws.com/foodPics/1619794810784.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pepperoni Pizza',
      price: 10,
      description: "Homemade pizza from scratch! You won't find pizza like this anywhere else. Crust and sauce all made from scratch and fresh cheese and pepperoni!",
      cuisine: "Italian",
      quantity: 5,
      allergenInfo: "All the allergies!",
      isForSale: true,
      foodPic: 'https://platepool.s3.amazonaws.com/foodPics/1619793202717.jpg',
      UserId: 3,
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
