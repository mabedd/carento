import mongoose from 'mongoose'

const rentSchema = mongoose.Schema(
  {
    carPlate:{
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : 'Car'
    } ,
    rentId: {
      type : Number,
      required : true,
      unique : true
    },
    renterId: {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : 'renter'
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
    },
    rateByCompany: {
       type : Number,
    },
    status:{
      type : Boolean,
      default : false
    }
  },
  {
    timestamps: true
  });

const Rent = mongoose.model('Rent',rentSchema).Schema
export default Rent;