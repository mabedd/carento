/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema(
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
      age: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      isBlackListed: {
        type: Boolean,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
    },
    {
      timestamps: true,
    });

const User = mongoose.model('user', userSchema);

export default User;
