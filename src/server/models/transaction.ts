import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
    },
    vaultAddress:{
      type: String,
      required:"Vault address is required"
    },
    action:{
      type: String,
      required:"Action is required",
      Enum: ["Deposit", "withdraw"]
    },
    status:{
      type: String,
      required:"Status is required",
      Enum: ["success", "failed"]
    },
    address: {
      type: String,
      required:"Inheritor address is required"
    }, 
    tokenType: {
      type: String,
      required:"Token Type is required"
    },
    amount: {
      type: String,
      required:"Token Allocated is required"
    },
    currentNonce:{
      type:String
    } 
  },

  { timestamps: true }
);
const transactions =
  mongoose.models.user || mongoose.model("transaction", transactionSchema, "transaction");
export default transactions;