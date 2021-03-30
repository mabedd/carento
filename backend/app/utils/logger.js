//import { createLogger, transports, format } from 'winston';
import * as winston from 'winston'

const logger = {}
/*   winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/car-rental-logs.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new winston.transports.Console(),
  ],
}); */

export default logger
