const mongoose = require('mongoose');

// use native Javascript promise in mongoose commands
mongoose.Promise = Promise;

// connect mongoose to our app's local database
mongoose.connect(process.env.DATABASE_URL,
{useMongooseClient: true})
.then(() => {
  console.log("Mongoose Connected 👍 👍 👍 👍");
})
.catch((err) =>{
  console.log("Mongoose connection FAILED! 🚨 🚨 🚨 🚨 🚨");
  console.log(err);
});
