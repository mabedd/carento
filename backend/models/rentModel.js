const mongoose = require("mongoose");

const rentSchema = mongoose.Schema(
  {
    carPlate:{
      type : String,
      required : true
    } ,
    rentId: {
      type : Number,
      required : true,
      unique : true
    },
    renterId: {
        type : Number,
        required : true
    },
    mileage: {
      type : Number,
      required : true
    },
    duration: {
      type : Number,
      required : true
    },
    startDate: {
      type : Date,
      required : true
    },
    endDate : {
      type : Date,
      required : true
    },
    price : {
      type : Number,
      required : true
    },
    isPaid : {
      type : Boolean,
      required : true
    },
    rateByRenter: {
       type : Number,
       required : true
    },
    rateByCompany: {
       type : Number,
       required : true
    },
  },
  {
    timestamps: true
  });

const Rent = mongoose.model('Rent',rentSchema)
export default Rent;