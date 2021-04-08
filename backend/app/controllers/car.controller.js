import BaseController from './base.controller.js';
import Car from '../models/carModel.js';

class CarsController extends BaseController {
  whitelist = [
    'companyId',
    'image',
    'carPlate',
    'carModel',
    'color',
    'totalMileage',
    'status',
    'benefits',
    'registrationDate',
    'endOfRegistrationDate',
  ];


  addCar = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
    try {
      const car = await Car.findOne({ carPlate: params['carPlate'] });
      if (car) {
        console.log(req.body , car);
        res.status(200).json({
          message: 'car has been already added with this car plate number',
          success: 1,
        });
      }
        const newCar = new Car({
          ...params,
          companyId: req.body.companyId,
        });
        const carSaved = await newCar.save();
        if (carSaved) {
          res.status(200).json({
            message: 'car has been saved',
            success: 1,
            car: carSaved,
          });
          
        }
        else{
        }
      
    } catch (err) {
      next(err);
    }
  };
  deleteCar = async (req, res, next) => {
    try {
      const { id } = req.params;
      const car = await Car.deleteOne({ _id: id }, { new: true });
      if (!car) {
        return res.status(200).json({ message: 'car not found with this id', success: 0 });
      }
      return res.status(200).json({ message: 'car deleted successfully!', car, success: 1 });
    } catch (error) {
      next(error);
    }
  }

  findAll = async (req, res, next) => {
    try {
      const carSaved = await Car.find({ companyId: req.car.companyId });
      res.status(200).json({
        success: 1,
        car: carSaved,
        count: carSaved.length,
      });
    } catch (error) {
      next(error);
    }
  }

  findAllCars = async (req, res, next) => {
    try {
      const carSaved = await Car.find({});
      res.status(200).json({
        success: 1,
        car: carSaved,
        count: carSaved.length,
      });
    } catch (error) {
      next(error);
    }
  }
  getProfile = async (req, res, next) => {
		try {
			const car = await Car.findById({ _id: req.user._id })
			if (!car) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}

			return res.status(200).json({ msg: Constants.messages.success, car: car });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
}

export default new CarsController();