/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const renterSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    nationalId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    rating: {
      type: Number,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isBlackListed: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    numberOfRents: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 10
    },
  },
  {
    timestamps: true,
  });

const Renter = mongoose.model('renter', renterSchema);
export default Renter;
