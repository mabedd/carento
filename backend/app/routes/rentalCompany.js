/* eslint-disable max-len */
import { Router } from 'express';
import RentalCompanyController from '../controllers/rentalCompany.controller';
import authenticate from '../middleware/authenticate';
import profile from '../middleware/profile-media';
import errorHandler from '../middleware/error-handler';


const users = new Router();

// Users Routes
users.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
users.post('/register', RentalCompanyController.register);
users.post('/login', RentalCompanyController.login);

users.post('/changeProfile', authenticate, RentalCompanyController.changeProfile);

users.get('/get-profile', authenticate, RentalCompanyController.getProfile);


users.use(errorHandler);

export default users;
