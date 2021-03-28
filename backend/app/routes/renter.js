/* eslint-disable max-len */
import { Router } from 'express';
import RenterController from '../controllers/renter.controller';
import authenticate from '../middleware/authenticate';
import profile from '../middleware/profile-media';
import errorHandler from '../middleware/error-handler';


const renter = new Router();

// Users Routes
renter.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
renter.post('/register', RenterController.register);
renter.post('/login', RenterController.login);
renter.get('/get-profile', authenticate, RenterController.getProfile);

renter.use(errorHandler);

export default renter;
