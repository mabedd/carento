/* eslint-disable max-len */
import { Router } from 'express';
import CarController from '../controllers/car.controller';
import authenticate from '../middleware/authenticate';
import errorHandler from '../middleware/error-handler';


const users = new Router();

// Users Routes
users.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
users.post('/add-car', authenticate, CarController.addCar);
users.get('/delete-car', authenticate, CarController.deleteCar);
users.get('/find-company-cars', authenticate, CarController.findAll);
users.get('/find-all-cars', CarController.findAllCars);

users.use(errorHandler);

export default users;