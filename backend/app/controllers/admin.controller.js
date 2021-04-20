import BaseController from './base.controller.js';
import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Constants from '../config/constants.js';


class AdminController extends BaseController {
	whitelist = [
		'username',
		'password',
		'phoneNumber',
		'email',
	];
	register = async (req, res, next) => {

		const params = this.filterParams(req.body, this.whitelist);
		try {
			// See if user exist
			
			const admin = await Admin.findOne({ email: params['email'] });
			
			if (admin) {
				return res.status(200).json({ message: Constants.messages.userExist, success: 0 });
			}
			// Encrypt password
			if (params['password']) {
				const salt = await bcrypt.genSalt(10);
				const hash = await bcrypt.hash(params['password'], salt);
				params['password'] = hash;
			}

			const newAdmin = new Admin(
				{
					...params,
				},
			);
			await newAdmin.save();
			jwt.sign({user :params}, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
				(err, token) => {
					if (err) throw err;
					return res.status(200).json({
						token,
						newAdmin,
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
			let admin;
			if (req.body.email) {
				admin = await Admin.findOne({ email: req.body.email });
			} else {
				admin = await Admin.findOne({ companyName: req.body.username });
			}
			if (!admin) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}

			const isMatch = await bcrypt.compare(password, admin.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Incorrect username or password', success: 0 });
			}
			jwt.sign({user:admin }, Constants.security.sessionSecret, { expiresIn: Constants.security.sessionExpiration },
				(err, token) => {
					if (err) throw err;
					return res.status(200).json({ token, success: 1 });
				});
		} catch (error) {
			error.status = 400;
			next(error);
		}
	};
}

export default new AdminController();
