/* eslint-disable max-len */
import { Router } from 'express';
import RentController from '../controllers/rent.controller.controller';
import authenticate from '../middleware/authenticate';
import errorHandler from '../middleware/error-handler';


const rent = new Router();

// Users Routes
car.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
rent.post('/add-rent', authenticate, RentController.addRent);
rent.get('/find-renter-rents', authenticate, RentController.findAllRentsByRenter);
rent.get('/find-car-rents', authenticate, CarController.findAllRentsByCar);
rent.get('/find-all-rents', CarController.findAllRents);

rent.use(errorHandler);

export default rent;