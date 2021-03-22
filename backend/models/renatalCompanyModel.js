import Car from "./CarModel";
import Renter from "./renterModel";
import Rent from "./rentModel";
import Ticket from "./ticketModel";

const mongoose = require("mongoose");

const rentalCompanySchema = mongoose.Schema(
  {
    companyName:{
      type : String,
      required : true,
      unique : true
    } ,
    companyId: {
      type : String,
      required : true,
      unique : true
    },
    
    email : {
      type : String,
      required : true,
      unique : true
    },
    registrationDate: Date,
    endOfRegistrationDate: Date,
    rents : [Rent],
    renters : [Renter],
    tickets : [Ticket],
    cars : [Car]
  },
  {
    timestamps: true
  });

const RentalCompany = mongoose.model('RentalCompany',rentalCompanySchema)
export default RentalCompany;