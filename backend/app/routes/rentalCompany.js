/* eslint-disable max-len */
import { Router } from 'express';
import RentalCompanyController from '../controllers/rentalCompany.controller.controller';
import authenticate from '../middleware/authenticate';
import profile from '../middleware/profile-media';
import errorHandler from '../middleware/error-handler';


const users = new Router();

// Users Routes
users.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
users.post('/register', RentalCompanyController.register);
users.post('/login', RentalCompanyController.login);
// users.post('/verify-user', UsersController.sendSMS);
// users.put('/verify-code', UsersController.verifyCode);
// users.post('/reset-password', UsersController.resetPassword);
// users.post('/get-user-email', UsersController.userEmail);
users.post('/changeProfile', authenticate, RentalCompanyController.changeProfile);
// users.get('/deactivateAccount', authenticate, UsersController.deactivateAccount);
// users.get('/allusers', UsersController.getUsers);
// users.post('/send-email', UsersController.sendMail);
users.get('/get-profile', authenticate, RentalCompanyController.getProfile);
// users.post('/checkout', UsersController.checkout);
// users.post('/changePicture', [authenticate, profile.fields( [
//   {
//     name: 'imageUrl',
//     maxCount: 1,
//   },
// ])], UsersController.changePicture);

users.use(errorHandler);

export default users;
