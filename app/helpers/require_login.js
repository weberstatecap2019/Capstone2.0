import jwt from 'jsonwebtoken'
let mySecret = 'MY_SECRET'

export function isLoggedIn(req){
  try{
    jwt.verify(req.headers.authorization.split(' ')[1], mySecret)
    return true
  }catch(err){
    return false
  }
}

export const requireLogin = function(req, res, next){
  if(isLoggedIn(req)){
      next();
  }else{
      res.status(401).json("Unauthorized request");
      res.end()
  }
}

export function getSignedAuthenticationToken(user, expireOn) {
  return jwt.sign({
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    firstName: user.lastName,
    exp: parseInt(expireOn.getTime() / 1000),
  }, mySecret)
}