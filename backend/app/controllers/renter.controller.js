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
		'numberOfRents',
		'rating'
	];

	register = async (req, res, next) => {

		const params = this.filterParams(req.body, this.whitelist);

		//console.log(params);
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
			jwt.sign({ user: params }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
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
			if (renter.isBlackListed) {
				return res.status(400).json({ message: 'YOU ARE BLACKLISTED', success: 0 });
			}
			const isMatch = await bcrypt.compare(password, renter.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}
			jwt.sign({ user: renter }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
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
		try {
			const user = await Renter.findById({ _id: req.user._id })
			if (req.body.email) {
				console.log(req.body.email);
				if (!Renter.findOne({ email: req.body.email })) {
					return res.status(200).json({ message: 'another user has the same email', success: 0 });
				}
				user.email = req.body.email
			}
			if (req.body.username) {
				if (!Renter.findOne({ username: req.body.username })) {
					return res.status(200).json({ message: 'another user has the same username', success: 0 });
				}
				user.username = req.body.username
			}
			if (req.body.phoneNumber) {
				user.phoneNumber = req.body.phoneNumber
			}
			if (req.body.password) {
				user.password = await bcrypt.hash(req.body.password, 10);
			}
			user.save()
			return res.status(200).json({ msg: Constants.messages.success, user: user });


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
	blackList = async (req, res, next) => {
		try {
			// find user by its id
			// find user by its id and update
			let user = await Renter.findById({ _id: req.params.id });

			if (!user) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}
			user.isBlackListed = true;
			user.save();

			// console.log(user);
			return res.status(200).json({ msg: Constants.messages.success, user: user });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
	rateRenter = async (req, res, next) => {
		try {
			const user = await Renter.findById({ _id: req.params.id });

			if (!user) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
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
	// findAllRentersByCompany = async (req, res, next) => {
	// 	try {
	// 		const user = await Rent.find({ _id: req.user.id });

	// 		if (!user) {
	// 			return res.status(404).json({ msg: Constants.messages.userNotFound });
	// 		}
	// 		if (user.numberOfRents == 0) {
	// 			user.rating = req.body.rating,
	// 				user.numberOfRents++
	// 		} else {
	// 			let newNumberOfRents = (user.numberOfRents) + 1;
	// 			user.rating = ((user.numberOfRents * user.rating) + (req.body.rating)) / newNumberOfRents;
	// 			user.numberOfRents++;
	// 		}
	// 		user.save()
	// 		return res.status(200).json({ msg: Constants.messages.success, user: user });
	// 	} catch (err) {
	// 		err.status = 400;
	// 		next(err);
	// 	}
	// };
}

export default new RenterController();
