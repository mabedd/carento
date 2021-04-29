/* eslint-disable max-len */
import { Router } from 'express';
import RenterController from '../controllers/renter.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


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
renter.put('/change-profile', authenticate, RenterController.changeProfile);
renter.get('/find-all-renters', authenticate, RenterController.findAllRenters);
renter.put('/blacklist/:id', RenterController.blackList);
renter.put('/rate-car/:id', RenterController.rateRenter);





renter.use(errorHandler);

export default renter;