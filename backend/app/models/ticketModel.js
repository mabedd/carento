import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {   
    raisedByRenter : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'renter'
    },
    raisedOnRenter : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'renter'
    },
    raisedByCompany : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'RentalCompany'
    },
    raisedOnCompany : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'RentalCompany'
    },
    rentId : {
      type : String,
      required : true,
    },
    isResolved : {
      type : Boolean,
      default : false
    },
    ticketmessage : {
      type : String,
      required : true
    }
    
  },
  {
    timestamps: true
  });

const Ticket = mongoose.model('Ticket',ticketSchema)
export default Ticket;