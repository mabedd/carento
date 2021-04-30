import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const rentSchema = new Schema(
  {
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Car'
    },
    renterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'renter'
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    mileage: {
      type: Number,
      //required : true
    },
    duration: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      // required : true
    },
    endDate: {
      type: Date,
      // required : true
    },
    price: {
      type: Number,
      required: true
    },
    isPaid: {
      type: Boolean,
      //required : true
      default: false
    },
    rateByRenter: {
      type: Number,
    },
    rateByCompany: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true
    },
    ticketraisedByRenter:{
      type : Boolean,
      default : false
    },
    ticketraisedByCompany:{
      type : Boolean,
      default : false
    },
  },
  {
    timestamps: true
  });

const Rent = mongoose.model('Rent', rentSchema)
export default Rent;