/* eslint-disable max-len */
import { Router } from 'express';
import CarController from '../controllers/car.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


const car = new Router();

// Users Routes
car.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
car.post('/add-car', CarController.addCar);
car.get('/delete-car', authenticate, CarController.deleteCar);
car.get('/find-company-cars', authenticate, CarController.findAll);
car.get('/find-all-cars', CarController.findAllCars);

car.get('/get-car-details/:id', CarController.getCarDetails);
car.put('/rate-car/:id', CarController.rateCar);



car.use(errorHandler);

export default car;