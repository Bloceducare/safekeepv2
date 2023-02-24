import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
      required:"Wallet address is required"
    }, 
    currentNonce:{
      type:String
    } 
  },

  { timestamps: true }
);
const users =
  mongoose.models.user || mongoose.model("user", userSchema, "user");
export default users;