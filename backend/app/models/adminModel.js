import Ticket from "./ticketModel.js";

import mongoose from 'mongoose'

const adminSchema = mongoose.Schema(
  {
    username:{
      type : String,
      required : true,
      unique : true
    } ,
    adminId: {
      type : String,
      required : true,
      unique : true
    },
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

const Admin = mongoose.model('Admin',adminSchema).schema
export default Admin;