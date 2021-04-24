import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const rentSchema = new Schema(
  {
    carId:{
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : 'Car'
    } ,
    renterId: {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : 'renter'
    },
    mileage: {
      type : Number,
      //required : true
    },
    duration: {
      type : Number,
      required : true
    },
    startDate: {
      type : Date,
      // required : true
    },
    endDate : {
      type : Date,
      // required : true
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
      default : true
    }
  },
  {
    timestamps: true
  });

const Rent = mongoose.model('Rent',rentSchema)
export default Rent;