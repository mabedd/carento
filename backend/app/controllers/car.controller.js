import BaseController from './base.controller';
import Car from '../models/carModel';

class CarsController extends BaseController {
    whitelist = [
      'companyId',
      'image',
      'carPlate',
      'carModel',
      'ownedBy',
      'color',
      'totalMieage',
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
          res.status(200).json({
            message: 'car has been already added with this car plate number',
            success: 1,
          });
          const newCar = new Car({
            ...params,
            companyId: req.car.companyId,
          });
          const carSaved = await newCar.save();
          if (carSaved) {
            res.status(200).json({
              message: 'car has been saved',
              success: 1,
              car: carSaved,
            });
          }
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
}

export default new CarsController();