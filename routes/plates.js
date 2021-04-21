var express = require('express');
var router = express.Router();
const models = require('../models');
const checkAuth = require('../auth/CheckAuth');

//localhost:3000/api/v1/plates/create
router.post('/create', checkAuth, async (req, res) => {
  //check to make sure recipe has all fields filled out
  const { user } = req.session;
  // checks to see if fields are filled out
  if (!req.body.name || !req.body.description || !req.body.price || req.body.quantity) {
    return res.status(400).json({
      error: 'please fill out all fields'
    })
  }
// checks to make sure user doesnt create duplicate listings
  const recipe = await models.Recipe.findOne({
    where: {
      UserId: user.id,
      title: req.body.title
    }
  })
  if (recipe) {
    return res.status(400).json({
      error: "recipe title already exists"
    })
  }
// creates new recipe
  const newRecipe = await models.Recipe.create({
    title: req.body.title,
    recipe: req.body.recipe,
    UserId: user.id,
  })

  return res.status(201).json(newRecipe)
})

module.exports = router;