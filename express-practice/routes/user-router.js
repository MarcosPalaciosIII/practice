const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const UserModel = require("../models/user-model");

const router = express.Router();



router.get("/signup", (req, res, next) => {
// redirect to home if you are already logged in
  if(req.user) {
    res.redirect("/");
    // early return to stop the function since there's an error
    // prevents the rest of the code from running
    return;
  }
  res.render("user-views/signup-page");
});


router.post("/process-signup", (req, res, next) => {
  if(req.body.signupPassword.length < 7 ||
     req.body.signupPassword.match(/[^a-z0-9]/i) === null) { // if no special characters ^

       res.locals.errorMessage = "Password must be longer than 8 characters with a special character";
       res.render("user-views/singup-page");

       // early return to stop the function since there's an error
    // (prevents the rest of the code from running)
       return;
     }
     // query database to see if email is taken
     UserModel.findOne({email: req.body.signupEmail})
     .then((userFromDb) => {
       // userFromDb will be null if email IS NOT taken

       //redisplay form if email is taken
       if(userFromDb !== null) {
         res.locals.errorMessage = "Email is Taken";
         res.render("user-views/signup-page");
       }
       // generate new salt for this users password
       const salt = bcrypt.genSaltSync(8);
       // encrypt the password submitted from the form
       const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

       const theUser = new UserModel({
         userName: req.body.signupUsername,
         email: req.body.signupEmail,
         encryptedPassword: scrambledPassword,
         loggedIn: false
       });
       // return the promise of the next database signup
       return theUser.save();
     })
     .then(() => {
       // redirect to homepage on successful sign up
       res.redirect("/");
     })
     .catch((err) => {
       next(err);
     });
});


router.get("/login", (req, res, next) => {
  // redirect home if already logged in
  if(req.user) {
    res.redirect("/");
    // early return to stop the function since there's an error
    // prevents the rest of the code from running
    return;
  }
  res.render("user-views/login-page");
});


router.post("/process-login", (req, res, next) => {
  // find the user document in database with that email
  UserModel.findOne({email: req.body.LoginEmail})
  .then((userFromDb) => {
    if(userFromDb === null) {
      // if we did not find user
      res.locals.errorMessage = "Incorrect Email";
      res.render("user-views/login-page");

      // early return since theres an error
      // (stops the rest of the code from running)
      return;
    }
    // if email is correct, now we confirm password
    const isPasswordGood = bcrypt.compareSync(req.body.LoginPassword, userFromDb.encryptedPassword);

    if (isPasswordGood === false) {
      res.locals.errorMessage = "Invalid Password";
      res.render("user-views/login-page");

      // early return to stop the function since there is an error
      // (stops the rest of the code from running)
      return;
    }
    // if credentials are good, we need to log user in.

    // Passport defines the "req.login()" for us to specify when to log in a user into the session
    req.login(userFromDb, (err) => {
      if (err) {
        // if login did not work, show error
        next(err);
      }
      else {
        userFromDb.set({loggedIn: true});
        userFromDb.save()
        .then(() =>{
          // redirect user to home page on successful log in
          res.redirect("/");
        })
        .catch((err) => {
          next(err);
        });
      }
    });
  })
  .catch((err) => {
    next(err);
  });
});


router.get('/logout', (req, res, next) => {

  req.user.set({loggedIn: false});
  req.user.save()

  .then(() => {
//Passport defines the "req.logout()" method
// for us to specify when to log out a user (clear them from the session)
    req.logout();
    res.redirect("/");

  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
