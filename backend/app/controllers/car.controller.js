import BaseController from './base.controller.js';
import Car from '../models/carModel.js';
import Constants from '../config/constants.js';
import RentalCompany from '../models/renatalCompanyModel.js';


class CarsController extends BaseController {
  whitelist = [
    'companyId',
    'carPlate',
    'carModel',
    'color',
    'totalMileage',
    'status',
    'price',
    'benefits',
    'registrationDate',
    'endOfRegistrationDate',
    'vendor',
    'size',
    'gasoline',
    'numberOfRents',
    'rating'
  ];


  addCar = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
   
    try {
      const car = await Car.findOne({ carPlate: params['carPlate'] });
      if (car) {
        return res.status(200).json({
          message: 'car has been already added with this car plate number',
          success: 1,
        });
      }
      const company = await RentalCompany.findById({ _id: req.user._id })
      const newCar = new Car({
        ...params,
        companyId: req.user._id,
        image: req.files.image[0].filename,
        companyName: company.companyName
      });
      const carSaved = await newCar.save();
      if (carSaved) {
        res.status(200).json({
          message: 'car has been saved',
          success: 1,
          car: carSaved,
        });

      }
      else {
        res.status(404)
      }

    } catch (err) {
      next(err);
    }
  };
  deleteCar = async (req, res, next) => {
    try {
      const car = await Car.deleteOne({ _id: req.params.id }, { new: true });
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
      const carSaved = await Car.find({ companyId: req.user._id });
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

  getCarDetails = async (req, res, next) => {
    try {
      // find user by its id
      // find user by its id and update
      const user = await Car.findById({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ msg: Constants.messages.userNotFound, success: 0 });
      }

      return res.status(200).json({ msg: Constants.messages.success, user: user });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  };
  rateCar = async (req, res, next) => {

    try {
      // find user by its id
      // find user by its id and update
      const user = await Car.findById({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ msg: Constants.messages.userNotFound, success: 0 });
      }
      if (user.numberOfRents == 0) {
        user.rating = req.body.rating,
          user.numberOfRents++
      } else {
        let newNumberOfRents = (user.numberOfRents) + 1;
        user.rating = ((user.numberOfRents * user.rating) + (req.body.rating)) / newNumberOfRents;
        user.numberOfRents++;
      }
      user.save()
      return res.status(200).json({ msg: Constants.messages.success, user: user });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  };

  returnCar = async (req, res, next) => {
    try {
      // find user by its id
      // find user by its id and update
      const user = await Car.findById({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ msg: Constants.messages.userNotFound, success: 0 });
      }
      user.status = true;
      user.save()
      return res.status(200).json({ msg: Constants.messages.success, user: user });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  };
}

export default new CarsController();