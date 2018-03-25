const passport = require('passport');

const UserModel = require('../models/user-model');


// serialize (what user info do we save to the session)
// get's called when user logs in.
passport.serializeUser((userFromDb, cb) => {
    // null is for saying "no errors occurred durring the serialize process"
  cb(null, userFromDb._id);
  // saves only the "._id" of the user.
});


// deserialize (how do we retrieve the user details from the session)
// gets called EVERY TIME you visit a page on the site while you are logged in
// allows for posibility of personalizing pages.
passport.deserializeUser((idFromSession, cb) => {
  // find the user's document by the ID we saved in the session
  UserModel.findById(idFromSession)
  .then((userFromDb) => {
    // null is saying "no errors occurred" durring the deserialize process
    cb(null, userFromDb);
    // send passport the logged in user's info
  })
  .catch((err) => {
    cb(err);
  });
});
