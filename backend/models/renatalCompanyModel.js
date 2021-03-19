const mongoose = require("mongoose");

const rentalCompanySchema = mongoose.Schema(
  {
    companyName:{
      type : String,
      required : true
    } ,
    nationalId: {
      type : String,
      required : true
    },
    
    email : {
      type : String,
      required : true
    },
    registrationDate: Date,
    endOfRegistrationDate: Date,
  },
  {
    timestamps: true
  });

const RentalCompany = mongoose.model('RentalCompany',rentalCompanySchema)
export default RentalCompany;