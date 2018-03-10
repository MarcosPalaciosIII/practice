const express = require('express');
const bcryst = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model');

const router = express.Router();


router.get('/signup', (req, res, next) => {
  if(req.user){

    // redirect user to homepage if already logged in
    res.redirect("/");

    // early return to stop the function since there's an error
    //(prevents the rest of the code form running
    return;
  }
  res.render("user-views/signup-page");
});




module.exports = router;
