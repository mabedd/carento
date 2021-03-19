const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    carPlate:{
      type : String,
      required : true
    } ,
    carModel: {
      type : Number,
      required : true
    },
    
    ownedBy : {
      type : String,
      required : true
    },
    color : {
        type : String,
        required : true
    },
    totalMieage: {
        type : Number,
        required : true
    },
    status: {
        type : Boolean,
        required : true
    },
    benefits : [String],
    registrationDate: Date,
    endOfRegistrationDate: Date,
  },
  {
    timestamps: true
  });

const RentalCompany = mongoose.model('RentalCompany',rentalCompanySchema)
export default RentalCompany;