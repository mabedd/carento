/* eslint-disable max-len */
import { Router } from 'express';
import TicketController from '../controllers/ticket.controller.js';
import authenticate from '../middleware/authenticate.js';
import errorHandler from '../middleware/error-handler.js';


const ticket = new Router();

// Users Routes
ticket.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
ticket.post('/raise-ticket-company/:id', authenticate, TicketController.raiseTicketByCompany);
ticket.post('/raise-ticket-renter/:id', authenticate, TicketController.raiseTicketByRenter);
ticket.get('/find-all-tickets', authenticate, TicketController.findAllTickets);
ticket.get('/get-ticket-details/:id', authenticate, TicketController.getTicketDetails);


ticket.use(errorHandler);

export default ticket;