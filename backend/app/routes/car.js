/* eslint-disable max-len */
import { Router } from 'express';
import CarController from '../controllers/car.controller';
import authenticate from '../middleware/authenticate';
import errorHandler from '../middleware/error-handler';


const car = new Router();

// Users Routes
car.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
car.post('/add-car', authenticate, CarController.addCar);
car.get('/delete-car', authenticate, CarController.deleteCar);
car.get('/find-company-cars', authenticate, CarController.findAll);
car.get('/find-all-cars', CarController.findAllCars);

car.use(errorHandler);

export default car;