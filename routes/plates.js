var express = require('express');
var router = express.Router();
const models = require('../models');
const checkAuth = require('../auth/CheckAuth');
const plate = require('../models/plate');

//localhost:3000/api/v1/plates/create
router.post('/create', checkAuth, async (req, res) => {
  //check to make sure recipe has all fields filled out
  const { user } = req.session;
  // checks to see if fields are filled out
  if (!req.body.name || !req.body.description || !req.body.price || !req.body.quantity) {
    return res.status(400).json({
      error: 'please fill out all fields'
    })
  }
// checks to make sure user doesnt create duplicate listings
  const recipe = await models.Plate.findOne({
    where: {
      UserId: user.id,
      name: req.body.name
    }
  })
  if (recipe) {
    return res.status(400).json({
      error: "you already have this recipe listed!"
    })
  }
// creates new recipe
  const newPlate = await models.Plate.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    cuisine: req.body.cuisine,
    quantity: req.body.quantity,
    allergenInfo: req.body.allergenInfo,
    UserId: user.id,
  })

  return res.status(201).json(newPlate)
})
// localhost:3000/api/v1/plates/:id/addcomment
router.post('/:id/addcomment', checkAuth, async (req, res) => {
  const plate = await models.Plate.findByPk(req.params.id)
  if (!plate) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  if (!req.body.text) {
    res.status(400).json({
      error: "please include all required fields"
    })
  }

  const comment = await plate.createComment({
    text: req.body.text,
    PlateId: req.params.id,
    UserId: req.session.user.id
  })

  res.status(201).json(comment)
})

// localhost:3000/api/v1/plates/getall
router.get('/getall', async (req, res) => {
  const plates = await models.Plate.findAll({
    include: [{
      model: models.User, 
      attributes: ['name', 'id']
    }]
  })
  res.status(201).json(plates)
})

// localhost:3000/api/v1/plates/:id/getplate
router.get('/:id/getplate', async (req, res) => {
  const plate = await models.Plate.findByPk(req.params.id)
  res.status(201).json(plate)
})

// localhost:3000/api/v1/plates/:id/getuserplates
router.get('/:id/getuserplates', async (req, res) => {
  const plates = await models.Plate.findAll({
    where: {
      UserId: req.params.id
    }
  })
  res.status(201).json(plates)
})

// localhost:3000/api/v1/plates/ownplates

module.exports = router;