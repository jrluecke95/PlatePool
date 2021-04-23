var express = require('express');
var router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');
const { route } = require('./plates');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:3000/api/v1/users/register
router.post('/register', async (req, res) => {
  // check for username and password
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: 'please fill out username and password'
    })
  }
  //check database for existing user
  const user = await models.User.findOne({
    where: {
      email: req.body.email
    }
  })
  //if exists, send error
  if (user) {
    return res.status(400).json({
      error: 'user already exists'
    })
  }

  // hash password
  const hash = await bcrypt.hash(req.body.password, 10)
  // create user
  const newUser = await models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    street: req.body.street,
    zipcode: req.body.zipcode,
    city: req.body.city,
    state: req.body.state
  })
  // respond with success message
  return res.status(201).json(newUser)
})

// localhost:3000/api/v1/users/login
router.post('/login', async (req, res) => {
  //check for username and password
  //if not both send error
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: 'please fill out email and password'
    })
  }
  //if we have both, lookup user in db
  const user = await models.User.findOne({
    where: {
      email: req.body.email
    }
  })
   //if no user send error
  if (!user) {
    return res.status(400).json({
      error: 'could not find user with that email'
    })
  }
  //if user exists, check password, if no match send error
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) {
    return res.status(401).json({
      error: 'incorrect password'
    })
  }
  //store user info in session/log in 
  req.session.user = user
  //respond with success
  return res.json({
    id: user.id,
    email: user.email,
    updatedAt: user.updatedAt
  })
})

// checking to see if user is logged in and sending back appropriate data to redux to store
router.get('/current', (req, res) => {
  const { user } = req.session;
  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      updatedAt: user.updatedAt,
    })
  } else {
    res.status(401).json({
      error: 'not logged in'
    })
  }
})

// localhost:3000/api/v1/users/:id
router.get('/:id/getuser', async (req, res) => {
  const user = await models.User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({
      error: 'could not find user with that id'
    })
  }

  res.json(user)
})

// localhost:3000/api/v1/users/logout
router.get('/logout', (req, res) => {
  req.session.user = null;
  res.json({
    success: 'logged out'
  })
})

// localhost:3000/api/v1/users/follow
// lets user follow another user
router.post('/follow', async (req, res) => {
  if (req.session.user.id === req.body.id) {
    return res.status(400).json({
      error: 'cannot follow yourself'
    })
  }

  const user = await models.User.findByPk(req.session.user.id)
  if (!req.body.id) {
    return res.status(400).json({
      error: 'please include user id'
    })
  }

  const follow = await models.User.findByPk(req.body.id);
  if (!follow) {
    return res.status(404).json({
      error: 'could not find user with that id'
    })
  }

  user.addFollow(follow)
  res.status(201).json(follow)
})

// localhost:3000/api/v1/users/:id/followers
// allows someone to view a users followers based on id passed through param
router.get('/:id/followers', async (req, res) => {
  const user = await models.User.findByPk(req.params.id);
  res.json(await user.getFollowers())
})

// localhost:3000/api/v1/users/:id/following
router.get('/:id/following', async (req, res) => {
  const user = await models.User.findByPk(req.params.id);
  res.json(await user.getFollows())
})

// localhost:3000/api/v1/users/:id/rate
// allows users to submit a rating for another user
router.post('/:id/rate', async (req, res) => {
  if (!req.body.rating) {
    res.status(400).json({
      error: 'please include rating'
    })
  }

  // const user = await models.User.findByPk(req.session.user.id);
  const ratee = await models.User.findByPk(req.params.id);
  if (!ratee) {
    res.status(404).json({
      error: 'could not find user'
    })
  }

  const checkRating = await models.Rating.findOne({
    where: {
      ReviewerId: req.session.user.id,
      UserId: req.params.id
    }
  })

  if (checkRating) {
    await models.Rating.update({
      rating: req.body.rating,
      ReviewerId: req.session.user.id
    }, {
      where: {
        ReviewerId: req.session.user.id,
        UserId: req.params.id
      }
    })
    res.status(204).json({
      message: 'rating updated'
    })
  } else {
    const newRating = await ratee.createRating({
      rating: req.body.rating,
      ReviewerId: req.session.user.id
    })
    res.status(201).json(newRating)
  }
})

module.exports = router;
