import express from 'express'
import passport from 'passport'
import { User } from "../models/schemas";
let router = express.Router()

/* GET /api/users/register/ */
router.post('/api/users/register', function(req, res, next) {
  let user = new User();
  console.log(req.body)
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function(err) {
    if(err){
      res.json({success: false, message: `Unable to register user`});
    }else{
      res.end()
    }
  });
});

router.post('/api/users/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info){
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      res.json({ "token" : user.generateJwt() });
    } else { // If user is not found
      res.status(401).json(info);
    }
  })(req, res, next)
})

export { router }
