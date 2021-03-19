const mongoose = require("mongoose");

const renterSchema = mongoose.Schema(
  {
    username:{
      type : String,
      required : true
    } ,
    nationalId: {
      type : String,
      required : true
    },
    password: {
      type : String,
      required : true
    },
    age: {
      type : Number,
      required : true
    },
    rating: {
      type : Number,
      required : true
    },
    phoneNumber : {
      type : String,
      required : true
    },
    isBlackListed : {
      type : Boolean,
      required : true
    },
    email : {
      type : String,
      required : true
    },
  },
  {
    timestamps: true
  });

const Renter = mongoose.model('Renter',renterSchema)
export default Renter;