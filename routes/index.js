var express = require('express');
var router = express.Router();
let passport = require('passport')

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/users');
});
// google login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))
// google callback route 
router.get('/oauth2callback', passport.authenticate(
  'google', 
  {
    successRedirect: '/users',
    failureRedirect: '/users'
  }
))
// google logout route 
router.get('/logout', function(req, res){
  req.logOut()
  res.redirect('/users')
})

module.exports = router;
