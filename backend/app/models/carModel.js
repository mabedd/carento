import Rent from "./rentModel.js";

import mongoose from 'mongoose'
var Schema = mongoose.Schema;
const carSchema = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'RentalCompany'
    },
    companyName: {
      type: String,
      // required: true,

    },
    image: {
      type: {},
      //required: true
    },
    carPlate: {
      type: String,
      required: true,
      unique: true
    },
    carModel: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      //required: true
    },
    gasoline: {
      type: Number,
      //required: true
    },
    vendor: {
      type: String,
      required: true
    },
    totalMileage: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    },
    numberOfRents: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 10
    },
    benefits: [String],

  },
  {
    timestamps: true
  });

const Car = mongoose.model('Car', carSchema)
export default Car;