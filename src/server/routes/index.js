var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var name;
  // console.log('EMAILS!!!', req.user.email);
  console.log(req.user);
  if(req.user) {
    name = req.user.displayName;
    email = req.user.email,
    photo = req.user.photo
  } else {
    name = "you";
    email = '';
    photo = '';
  }
  res.render('index', {
    title: 'Hello ' + name,
    email: email,
    photo: photo
    });
});

module.exports = router;
