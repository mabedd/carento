/* eslint-disable max-len */
import { Router } from 'express';
import AdminController from '../controllers/admin.controller';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


const admin = new Router();

// Users Routes
admin.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});

admin.post('/login', AdminController.login);
admin.post('/register', AdminController.register);





admin.use(errorHandler);

export default admin;