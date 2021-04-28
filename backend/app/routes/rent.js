/* eslint-disable max-len */
import { Router } from 'express';
import RentController from '../controllers/rent.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


const rent = new Router();

// Users Routes
rent.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
rent.post('/add-rent', authenticate, RentController.addRent);
rent.get('/find-renter-rents', authenticate, RentController.findAllRentsByRenter);
rent.get('/find-car-rents/:id', authenticate, RentController.findAllRentsByCar);

rent.get('/find-company-rents/', authenticate, RentController.findAllRentsByCompany);
rent.get('/find-all-rents', RentController.findAllRents);
rent.get('/get-rent-details/:id', authenticate, RentController.getRentDetails);


rent.use(errorHandler);

export default rent;