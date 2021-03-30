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
rent.get('/find-car-rents', authenticate, RentController.findAllRentsByCar);
rent.get('/find-all-rents', RentController.findAllRents);

rent.use(errorHandler);

export default rent;