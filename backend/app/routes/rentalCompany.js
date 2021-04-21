/* eslint-disable max-len */
import { Router } from 'express';
import RentalCompanyController from '../controllers/rentalCompany.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


const users = new Router();

// Users Routes
users.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
users.post('/register', RentalCompanyController.register);
users.post('/login', RentalCompanyController.login);

users.post('/change-profile', authenticate, RentalCompanyController.changeProfile);

users.get('/get-profile', authenticate, RentalCompanyController.getProfile);
users.get('/find-all-companies',authenticate, RentalCompanyController.findAllCompanies);
users.put('/activate/:id', RentalCompanyController.activate);




users.use(errorHandler);

export default users;
