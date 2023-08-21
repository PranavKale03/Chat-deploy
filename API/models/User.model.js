import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firebase_uid:{
      type: String,
      unique: true,
    },
    email: {
      type: String,
      require: true, 
      index:true, 
      unique:true,
      sparse:true
    },
    first_name: {
      type: String,
      require: false,
    },
    last_name:{
      type : String,
      require : false,
    },
    gender : {
      type : String,
    },
    date_of_birth : {
      type : String,
    },
    phone_number: {
      type: String,
      unique : true,
    },
    bike_name:{
      type: String,
    },
    communities: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("authuser", userSchema);

export default User;
