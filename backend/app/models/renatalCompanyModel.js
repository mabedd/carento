import Car from "./carModel.js";
import Renter from "./renterModel.js";
import Rent from "./rentModel.js";
import Ticket from "./ticketModel.js";

import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const rentalCompanySchema = new Schema(
  {
    companyName:{
      type : String,
      required : true,
      unique : true
    } ,    
    email : {
      type : String,
      required : true,
      unique : true
    },
    password: {
      type : String,
      required : true
    },
    phoneNumber : {
      type : String,
      required : true
    },
    registrationDate: Date,
    endOfRegistrationDate: Date,
    // rents : [Rent],
    // renters : [Renter],
    // tickets : [Ticket],
    // cars : [Car]
  },
  {
    timestamps: true
  });

const RentalCompany = mongoose.model('RentalCompany',rentalCompanySchema)
export default RentalCompany;