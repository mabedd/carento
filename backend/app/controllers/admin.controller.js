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
