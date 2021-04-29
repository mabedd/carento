import express from 'express';
import path from 'path'
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import helmet from 'helmet';
import multer from 'multer'
import renter from './routes/renter.js';
import rentalCompany from './routes/rentalCompany.js';
import car from './routes/car.js'
import rent from './routes/rent.js'
import admin from './routes/admin.js'
import ticket from './routes/ticket.js'
import upload from './routes/upload.js'
import Constants from './config/constants.js';
// import httpLogger from './logger-middlewares/httpLogger.js'
//const { httpLogger } = require('./logger-middlewares');

const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet());

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors());

// Request logger
// https://github.com/expressjs/morgan
if (!Constants.envs.test) {
  app.use(morgan('dev'));
}

// Parse incoming request bodies
// https://github.com/expressjs/body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Lets you use HTTP verbs such as PUT or DELETE
// https://github.com/expressjs/method-override
app.use(methodOverride());
// app.use(httpLogger);
// Mount public routes
//TODO: check this (cant be used with ES6 modules)
//app.use('/public', express.static(`${__dirname}/public`));

// Mount API routes
app.use(`${Constants.apiPrefix}/renter`, renter);
app.use(`${Constants.apiPrefix}/rent`, rent);
app.use(`${Constants.apiPrefix}/rental-company`, rentalCompany);
app.use(`${Constants.apiPrefix}/car`, car);
app.use(`${Constants.apiPrefix}/ticket`, ticket);
app.use(`${Constants.apiPrefix}/admin`, admin);
app.use(`${Constants.apiPrefix}/upload`, upload);

//deployment

//make uploads folder static
const __dirname = path.resolve() //dirname doesnt work with es modules -- this way it works correctly
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.listen(Constants.port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    Port: ${Constants.port}
    Env: ${app.get('env')}
  `);
});

export default app;
