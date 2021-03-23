import Rent from "./rentModel.js";
import Ticket from "./ticketModel.js";

import mongoose from 'mongoose'

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
    // rents : [Rent],
    // tickets : [Ticket]
  },
  {
    timestamps: true
  });

const Renter = mongoose.model('Renter',renterSchema).schema
export default Renter;