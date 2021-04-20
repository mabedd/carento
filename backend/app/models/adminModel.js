import Ticket from "./ticketModel.js";

import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username:{
      type : String,
      required : true,
      unique : true
    } ,
    password: {
      type : String,
      required : true
    },
    phoneNumber : {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true,
      unique : true
    },
    // rents : [Ticket]
  },
  {
    timestamps: true
  });

const Admin = mongoose.model('Admin',adminSchema)
export default Admin;