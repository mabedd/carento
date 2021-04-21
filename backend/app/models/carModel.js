import Rent from "./rentModel.js";

import mongoose from 'mongoose'
var Schema = mongoose.Schema;
const carSchema = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      //required : true,
      ref: 'RentalCompany'
    },
    image: {
      type: String,
      // required: true
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
      //required: true,
      default: true
    },
    benefits: [String],
    registrationDate: Date,
    endOfRegistrationDate: Date,
    // rents : [Rent]
  },
  {
    timestamps: true
  });

const Car = mongoose.model('Car', carSchema)
export default Car;