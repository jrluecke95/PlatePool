var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:3000/api/v1/customers/register
router.post('/register', async (req, res) => {
  // check for username and password
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: 'please fill out username and password'
    })
  }
  //check database for existing user
  const customer = await models.Customer.findOne({
    where: {
      email: req.body.email
    }
  })
  //if exists, send error
  if (customer) {
    return res.status(400).json({
      error: 'email is already associated with an account!'
    })
  }
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
  req.session.customer = customer
  //respond with success
  return res.json({
    id: user.id,
    email: user.email,
    updatedAt: user.updatedAt
  })
})

module.exports = router;
