/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import BaseController from './base.controller.js';
import Renter from '../models/renterModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Constants from '../config/constants.js';
// import { generateSixDigitCode } from '../helpers/index';
// import { sendInquiryEmail } from '../lib/util';
// const stripe = require('stripe')('sk_test_nhfdyw1ShOeXXEuZ9KoJzQXe');
// import { v4 as uuidv4 } from 'uuid';

class RenterController extends BaseController {
	whitelist = [
		'username',
		'nationalId',
		'password',
		'dateOfBirth',
		'rating',
		'phoneNumber',
		'isBlackListed',
		'email',
	];

	register = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);
		try {
			// See if user exist
			const renter = await Renter.findOne({ email: params['email'] });
			if (renter) {
				return res.status(200).json({ message: Constants.messages.userExist, success: 0 });
			}
			// Encrypt password
			if (params['password']) {
				const salt = await bcrypt.genSalt(10);
				const hash = await bcrypt.hash(params['password'], salt);
				params['password'] = hash;
			}

			const newRenter = new Renter(
				{
					...params,
				},
			);
			await newRenter.save();
			jwt.sign({user :params}, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
				(err, token) => {
					if (err) throw err;
					return res.status(200).json({
						token,
						newRenter,
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
			let renter;
			if (req.body.email) {
				renter = await Renter.findOne({ email: req.body.email });
			} else if (req.body.nationalId) {
				renter = await Renter.findOne({ nationalId: req.body.nationalId });
			} else {
				renter = await Renter.findOne({ username: req.body.username });
			}
			if (!renter) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}

			const isMatch = await bcrypt.compare(password, renter.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}
			jwt.sign({ user:renter }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
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
			const renter = await Renter.findByIdAndUpdate({ _id: req.renter._id }, { $set: params }, { new: true });
			if (!renter) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}
			const data = {
				id: renter._id,
				email: renter.email,
				username: renter.username,
				nationalId: renter.nationalId,
				password: renter.password,
				dateOfBirth: renter.dateOfBirth,
				rating: renter.rating,
				phoneNumber: renter.phoneNumber,
			};
			return res.status(200).json({ msg: 'Profile Updated Successfully!', renter: data });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
	getProfile = async (req, res, next) => {
		try {
			// find user by its id
			// find user by its id and update
			const user = await Renter.findById({ _id: req.user._id });
			if (!user) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}

			return res.status(200).json({ msg: Constants.messages.success, user: user });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
	findAllRenters = async (req, res, next) => {
		try {
		  const renterSaved = await Renter.find({});
		  res.status(200).json({
			success: 1,
			renter: renterSaved,
			count: renterSaved.length,
		  });
		} catch (error) {
		  next(error);
		}
	  }
}

export default new RenterController();
