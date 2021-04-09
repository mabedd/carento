import BaseController from './base.controller.js';
import Ticket from '../models/ticketModel.js';
import Constants from '../config/constants.js';


class TicketController extends BaseController {
  whitelist = [
    'raisedByRenter',
    'raisedOnRenter',
    'raisedByCompany',
    'raisedOnCompany',
    'rentId',
    'isResolved',
    'ticketmessage',
  ];


  raiseTicketByRenter = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
    try {
      
        const newTicket = new Ticket({
          ...params,
          raisedByRenter : req.body.raisedByRenter,
          raisedOnCompany : req.body.raisedOnCompany,
          rentId : req.body.rentId
        });
        const ticketSaved = await newTicket.save();
        if (ticketSaved) {
          res.status(200).json({
            message: 'ticket has been saved',
            success: 1,
            ticket: ticketSaved,
          });
          
        }
        else{
        }
      
    } catch (err) {
      next(err);
    }
  };
  raiseTicketByCompany = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
    try {
      
        const newTicket = new Ticket({
          ...params,
          raisedByRenter : req.body.raisedOnRenter,
          raisedOnCompany : req.body.raisedByCompany,
          rentId : req.body.rentId
        });
        const ticketSaved = await newTicket.save();
        if (ticketSaved) {
          res.status(200).json({
            message: 'ticket has been saved',
            success: 1,
            ticket: ticketSaved,
          });
          
        }
        else{
        }
      
    } catch (err) {
      next(err);
    }
  };
 

  findAllTickets = async (req, res, next) => {
    try {
      const ticketSaved = await Ticket.find({});
      res.status(200).json({
        success: 1,
        ticket: ticketSaved,
        count: ticketSaved.length,
      });
    } catch (error) {
      next(error);
    }
  }
 
  getTicketDetails = async (req, res, next) => {
		try {
			// find user by its id
			// find user by its id and update
			const user = await Ticket.findById({ _id: req.params.id });

			if (!user) {
				return res.status(404).json({ msg: Constants.messages.userNotFound });
			}

			return res.status(200).json({ msg: Constants.messages.success, user: user });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};
}

export default new TicketController();