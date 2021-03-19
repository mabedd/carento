// 1. Include config and modules
import moment from 'moment'
import jwt from 'jsonwebtoken'
import Auth from './controllers/auth.js'

function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'TokenMissing' });
  }
  var token = req.headers.authorization.split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ error: "TokenInvalid" });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ error: 'TokenExpired' });
  }
  
  Person.findById(payload.sub, function(err, person){
    if (!person){
      return res.status(401).send({error: 'PersonNotFound'});
    } else {
      req.user = payload.sub;
      next();
    }
  });
};

function routes (app) {
  app.post('/auth/login', Auth.login);
  app.post('/auth/signup', Auth.signup);
};
export default routes
