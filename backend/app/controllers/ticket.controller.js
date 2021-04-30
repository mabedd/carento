import BaseController from './base.controller.js';
import Ticket from '../models/ticketModel.js';
import Constants from '../config/constants.js';
import Rent from '../models/rentModel';



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
      const rent = await Rent.findById({ _id: req.params.id });
      console.log(req.params.id)

      const newTicket = new Ticket({
        ...params,
        raisedByRenter: req.user._id,
        raisedOnCompany: rent.companyId,
        rentId: rent._id
      });
      const ticketSaved = await newTicket.save();
      if (ticketSaved) {
        rent.raiseTicketByRenter = true;
        rent.save();
        res.status(200).json({
          message: 'ticket has been saved',
          success: 1,
          ticket: ticketSaved,
        });

      }
      else {
      }

    } catch (err) {
      next(err);
    }
  };
  raiseTicketByCompany = async (req, res, next) => {
    const params = this.filterParams(req.body, this.whitelist);
    try {
      const rent = await Rent.findOne({ _id: req.params.id });
      const newTicket = new Ticket({
        ...params,
        raisedByRenter: rent.renterId,
        raisedOnCompany: req.user._id,
        rentId: rent._id
      });
      const ticketSaved = await newTicket.save();
      if (ticketSaved) {
        rent.raiseTicketByCompany = true;
        rent.save();
        res.status(200).json({
          message: 'ticket has been saved',
          success: 1,
          ticket: ticketSaved,
        });

      }
      else {
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