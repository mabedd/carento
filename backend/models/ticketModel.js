const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    ticketId: {
      type : String,
      required : true,
      unique : true
    },
    
    raisedBy : {
      type : String,
      required : true,
    },
    raisedOn : {
      type : String,
      required : true,
    },
    rentId : {
      type : String,
      required : true,
    },
    isResolved : {
      type : Boolean,
      required : true
    }
    
  },
  {
    timestamps: true
  });

const Ticket = mongoose.model('Ticket',ticketSchema)
export default Ticket;