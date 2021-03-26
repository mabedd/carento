/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import BaseController from './base.controller';
import RentalCompany from '../models/renatalCompanyModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Constants from '../config/constants';
// import { generateSixDigitCode } from '../helpers/index';
// import { sendInquiryEmail } from '../lib/util';
// const stripe = require('stripe')('sk_test_nhfdyw1ShOeXXEuZ9KoJzQXe');
// import { v4 as uuidv4 } from 'uuid';

class RentalCompanyController extends BaseController {
	whitelist = [
	  'companyName',
	  'password',
	  'endOfRegistrationDate',
	  'phoneNumber',
	  'registrationDate',
	  'email',
	];

	register = async (req, res, next) => {
	  const params = this.filterParams(req.body, this.whitelist);
	  try {
	      // See if user exist
	      const rentalCompany = await RentalCompany.findOne({ email: params['email'] });
	      if (renter) {
	        return res.status(200).json({ message: Constants.messages.userExist, success: 0 });
		  }
	    // Encrypt password
	    if (params['password']) {
	      const salt = await bcrypt.genSalt(10);
	      const hash = await bcrypt.hash(params['password'], salt);
	      params['password'] = hash;
	    }

	    const newRentalCompany = new RentalCompany(
	        {
	          ...params,
	        },
	    );
	        await newRentalCompany.save();
	    jwt.sign(params, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
	        (err, token) => {
			  if (err) throw err;
	          return res.status(200).json({
	        token,
	        newRentalCompany,
	        success: 1,
			  });
	        });
	  } catch (err) {
	    err.status = 200;
	    next(err);
	  }
	};

	login = async (req, res, next) => {
	  const { password } = req.body || {};
	  try {
	    // See if user exist
	    let rentalCompany;
		 if (req.body.email) {
			rentalCompany = await RentalCompany.findOne({ email: req.body.email });
		 } else {
			rentalCompany = await RentalCompany.findOne({ username: req.body.companyName });
		 }
	    if (!renter) {
		  return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
	    }

	    const isMatch = await bcrypt.compare(password, rentalCompany.password);
	    if (!isMatch) {
	      return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
	    }
	    jwt.sign({ rentalCompany }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
	        (err, token) => {
		  if (err) throw err;
	      return res.status(200).json({ token, success: 1 });
	    });
	  } catch (error) {
	    error.status = 400;
	    next(error);
	  }
	};
	changeProfile = async (req, res, next) => {
		// filter body data with whitelist data
		const params = this.filterParams(req.body, this.whitelist);
		try {
		  // find user by its id and update
		  const rentalCompany = await Renter.findByIdAndUpdate({ _id: req.rentalCompany._id }, { $set: params }, { new: true });
		  if (!rentalCompany) {
			return res.status(404).json({ msg: Constants.messages.userNotFound });
		  }
		  const data = {
			id: rentalCompany._id,
			email: rentalCompany.email,
			username: rentalCompany.companyName,
			password : rentalCompany.password,
			phoneNumber : rentalCompany.phoneNumber,
		  };
		  return res.status(200).json({ msg: 'Profile Updated Successfully!', rentalCompany: data });
		} catch (err) {
		  err.status = 400;
		  next(err);
		}
	  };

  getProfile = async (req, res, next) => {
    try {
      // find user by its id
      // find user by its id and update
      const rentalCompany = await User.findById({ _id: req.rentalCompany._id });
      if (!rentalCompany) {
        return res.status(404).json({ msg: Constants.messages.userNotFound });
      }

      return res.status(200).json({ msg: Constants.messages.success, rentalCompany: rentalCompany });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  };
}

export default new RentalCompanyController();
