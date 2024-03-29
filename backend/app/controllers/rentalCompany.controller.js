import BaseController from './base.controller.js';
import RentalCompany from '../models/renatalCompanyModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Constants from '../config/constants.js';


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
			if (rentalCompany) {
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
			jwt.sign({ user: params }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
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
				rentalCompany = await RentalCompany.findOne({ companyName: req.body.companyName });
			}
			if (!rentalCompany) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}
			if (!rentalCompany.status) {
				return res.status(200).json({ message: 'PLEASE WAIT FOR ACTIVATION', success: 0 });
			}

			const isMatch = await bcrypt.compare(password, rentalCompany.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}

			let id = rentalCompany._id
			console.log(rentalCompany);
			jwt.sign({ user: rentalCompany }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
				(err, token) => {
					if (err) throw err;
					return res.status(200).json({ token, success: 1, id });
				});
		} catch (error) {
			error.status = 400;
			next(error);
		}
	};
	changeProfile = async (req, res, next) => {
		try {
			const user = await RentalCompany.findById({_id : req.user._id})
			if (req.body.email){
				console.log(req.body.email);
				if(!RentalCompany.findOne({email : req.body.email})){
					return res.status(200).json({ message: 'another user has the same email', success: 0 });
				}
				user.email = req.body.email
			}
			if (req.body.username){
				if(!RentalCompany.findOne({username : req.body.username})){
					return res.status(200).json({ message: 'another user has the same username', success: 0 });
				}
				user.username = req.body.username
			}
			if (req.body.phoneNumber){
				user.phoneNumber = req.body.phoneNumber
			}
			if (req.body.password){
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
			const rentalCompany = await RentalCompany.findById({ _id: req.user._id });
			if (!rentalCompany) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}

			return res.status(200).json({ msg: Constants.messages.success, rentalCompany: rentalCompany });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
	findAllCompanies = async (req, res, next) => {
		try {
			const companySaved = await RentalCompany.find({});
			res.status(200).json({
				success: 1,
				company: companySaved,
				count: companySaved.length,
			});
		} catch (error) {
			next(error);
		}
	}
	activate = async (req, res, next) => {
		try {
			// find user by its id
			// find user by its id and update
			const user = await RentalCompany.findById({ _id: req.params.id });

			if (!user) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}
			user.status = true
			user.save()
			return res.status(200).json({ msg: Constants.messages.success, user: user });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
	
}

export default new RentalCompanyController();
