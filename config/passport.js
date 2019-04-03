import passport from 'passport'
let LocalStrategy = require('passport-local').Strategy
import { User } from "../app/models/schemas"

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err)
      }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        })
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password'
        })
      }
      // If credentials are correct, return the user object
      return done(null, user)
    });
  }
));