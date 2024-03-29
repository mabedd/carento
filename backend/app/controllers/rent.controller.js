import BaseController from './base.controller.js';
import Rent from '../models/rentModel.js';
import Company from '../models/renatalCompanyModel.js';
import Renter from '../models/renterModel.js';

import Constants from '../config/constants.js';
import Car from '../models/carModel.js'

class RentController extends BaseController {
  whitelist = [
    'carId',
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
      const car = await Car.findOne({ _id: req.body.carId });
      console.log(car);
      if (!car || !car.status) {
        return res.status(200).json({ message: 'car is not available or not found', success: 0 });
      }
      car.status = false;
      await car.save();
      const newRent = new Rent({
        ...params,
        renterId: req.user._id,
        companyId: car.companyId
      });
      const rentSaved = await newRent.save();
      
      if (rentSaved) {
        const company = await  Company.findById({_id : car.companyId})
        const user = await  Renter.findById({_id : req.user._id})
        let flag = false
        company.renters.forEach(renter => {
          if (renter && renter._id == req.user._id){
            flag = true
             
          }
        });
        if(!flag){
          company.renters.push(user)
        }
        company.save() 
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
      const rentSaved = await Rent.find({ renterId: req.user._id });
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
      const rentSaved = await Rent.find({ carId: req.params.id });
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
  findAllRentsByCompany = async (req, res, next) => {
    try {
      const rentSaved = await Rent.find({ companyId: req.user._id });
      res.status(200).json({
        success: 1,
        rent: rentSaved,
      });
    } catch (error) {
      next(error);
    }
  }
  getRentDetails = async (req, res, next) => {
    try {
      // find user by its id
      // find user by its id and update
      const user = await Rent.findById({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ msg: Constants.messages.userNotFound });
      }

      return res.status(200).json({ msg: Constants.messages.success, user: user });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  };

}

export default new RentController();