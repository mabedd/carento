/* eslint-disable max-len */
import { Router } from 'express';
import CarController from '../controllers/car.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';
import profileMedia from '../middleware/profile-media.js'

const car = new Router();

// Users Routes
car.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
car.post('/add-car', [authenticate, profileMedia.fields( [
  {
    name: 'image',
    maxCount: 1,
  },
])], CarController.addCar);
car.delete('/delete-car/:id', authenticate, CarController.deleteCar);
car.get('/find-company-cars', authenticate, CarController.findAll);
car.get('/find-all-cars', CarController.findAllCars);

car.get('/get-car-details/:id', CarController.getCarDetails);
car.put('/rate-car/:id',authenticate, CarController.rateCar);
car.put('/return-car/:id',authenticate, CarController.returnCar);




car.use(errorHandler);

export default car;