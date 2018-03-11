const express = require('express');
const bcryst = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model');

const router = express.Router();



router.get("/signup", (req, res, next) => {
// redirect to home if you are already logged in
  if(req.user){
    res.redirect("/");
    // early return to stop the function since there's an error
    //(prevents the rest of the code form running
    return;
  }

  res.render("user-views/signup-page");
});



router.get('/logout', (req, res, next) => {

  req.user.set({loggedIn: false});
  req.user.save()

  .then(() => {
    req.logout();
    res.redirect("/");

  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
