var express = require('express');
var router = express.Router();
const models = require('../models');
const checkAuth = require('../auth/CheckAuth');
const multer = require('multer');
const path = require('path');
const s3Upload = require('../utils/s3upload');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
const upload = multer({storage});

// creating new plate
//localhost:3000/api/v1/plates/create
router.post('/create', upload.single('foodPic'), checkAuth, async (req, res) => {
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

  if (req.file) {
    const s3File = await s3Upload(req.file, 'foodPics')
    req.body.foodPic = s3File
  }
// creates new plate
  const newPlate = await models.Plate.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    cuisine: req.body.cuisine,
    quantity: req.body.quantity,
    allergenInfo: req.body.allergenInfo,
    isForSale: req.body.isForSale,
    foodPic: req.body.foodPic,
    UserId: user.id
  })

  return res.status(201).json(newPlate)
})

// adding a comment to a plate route
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

// gets all comment for a plate/post
// localhost:3000/api/v1/:id/getcomments
router.get('/:id/getcomments', async (req, res) => {
  const plate = await models.Plate.findByPk(req.params.id)
  if (!plate) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  const comments = await plate.getComments({
    include: [{ model: models.User, attributes: ['username', 'id'] }]
  })

  res.status(201).json(comments)
})

// for the home page - gets all plates that are available
// localhost:3000/api/v1/plates/getall
router.get('/getall', async (req, res) => {
  const plates = await models.Plate.findAll({
    where: {
      isForSale: true
    },
    include: [{
      model: models.User, 
      attributes: ['name', 'id', 'city', 'state', 'zipcode', 'street', 'profilePic']
    }],
    order: [['id', 'DESC'], ['createdAt', 'DESC'] ]
  })
  res.status(201).json(plates)
})

// gets plate based on id of plate
// localhost:3000/api/v1/plates/:id/plate
router.get('/:id/plate', async (req, res) => {
  const plate = await models.Plate.findByPk(req.params.id)
  res.status(200).json(plate)
})

// gets plates based on user being searched
// could be used to view other user's recipes
// localhost:3000/api/v1/plates/:id/getuserplates
router.get('/:id/usersplates', async (req, res) => {
  const plates = await models.Plate.findAll({
    where: {
      UserId: req.params.id
    }
  })
  res.status(200).json(plates)
})

// gets users own plates that they might want to edit
// localhost:3000/api/v1/plates/ownplates
router.get('/ownplates', checkAuth, async (req, res) => {
  const { user } = req.session;
  const plates = await models.Plate.findAll({
    where: {
      UserId: user.id
    },
    order: [['id', 'DESC'], ['createdAt', 'DESC'] ]
  })
  res.json(plates)
})

// lets user remove plate from their listings
// localhost:3000/api/v1/plates/:id/deleteplate
router.delete('/:id/deleteplate', checkAuth, async (req, res) => {
  await models.Plate.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).json('plate deleted')
})

// edit plate route 
// localhost:3000/api/v1/plates/:id
router.put('/:id', upload.single('foodPic'), checkAuth, async (req, res) => {
  const id = req.params.id;
  if (req.file) {
    const s3File = await s3Upload(req.file, 'foodPics')
    req.body.foodPic = s3File
  }

  const plate = await models.Plate.findByPk(id)

  plate.update({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    cuisine: req.body.cuisine,
    quantity: req.body.quantity,
    allergenInfo: req.body.allergenInfo,
    isForSale: req.body.isForSale,
    foodPic: req.body.foodPic
  })
  res.json(plate)
})

module.exports = router;