import Rent from "./rentModel";
import Ticket from "./ticketModel";

const mongoose = require("mongoose");

const renterSchema = mongoose.Schema(
  {
    username:{
      type : String,
      required : true,
      unique : true
    } ,
    nationalId: {
      type : String,
      required : true,
      unique : true
    },
    password: {
      type : String,
      required : true
    },
    age: {
      type : Number,
      required : true
    },
    rating: {
      type : Number,
      required : true
    },
    phoneNumber : {
      type : String,
      required : true
    },
    isBlackListed : {
      type : Boolean,
      required : true
    },
    email : {
      type : String,
      required : true,
      unique : true
    },
    rents : [Rent],
    tickets : [Ticket]
  },
  {
    timestamps: true
  });

const Renter = mongoose.model('Renter',renterSchema)
export default Renter;