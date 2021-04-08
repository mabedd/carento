import BaseController from './base.controller.js';
import Rent from '../models/rentModel.js';

class RentController extends BaseController {
  whitelist = [
    'carPlate',
    'renterId',
    'mileage',
    'duration',
    'color',
    'startDate',
    'endDate',
    'price',
    'isPaid',
    'rateByRenter',
    'rateByCompany',
    'status',
  ];


  addRent = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
    try {
      // const rent = await Rent.findOne({ rentId: params[''] });
      // if (rent) {
      //   res.status(200).json({
      //     message: 'rent has been already added with this rent number',
      //     success: 1,
      //   });
        const newRent = new Rent({
          ...params,
          renterId: req.body.renterId,
          carId: req.body.carId
        });
        const rentSaved = await newRent.save();
        if (rentSaved) {
          res.status(200).json({
            message: 'rent has been saved',
            success: 1,
            rent: rentSaved,
          });
        }
      
    } catch (err) {
      next(err);
    }
  };

  findAllRentsByRenter = async (req, res, next) => {
    try {
      const rentSaved = await Rent.find({ renterId: req.rent.renterId });
      res.status(200).json({
        success: 1,
        rent: rentSaved,
      });
    } catch (error) {
      next(error);
    }
  }
  findAllRentsByCar = async (req, res, next) => {
    try {
      const rentSaved = await Rent.find({ carId: req.rent.carId });
      res.status(200).json({
        success: 1,
        rent: rentSaved,
        count: rentSaved.length,
      });
    } catch (error) {
      next(error);
    }
  }

  findAllRents = async (req, res, next) => {
    try {
      const rentSaved = await Rent.find({});
      res.status(200).json({
        success: 1,
        car: rentSaved,
        count: rentSaved.length,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new RentController();