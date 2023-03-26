import mongoose from "mongoose";
const Schema = mongoose.Schema;

const inheritorSchema = new Schema(
  {
    name: {
      type: String,
    },
    vaultAddress:{
      type: String,
      required:"Vault address is required"
    },
    address: {
      type: String,
      required:"Inheritor address is required"
    }, 
    tokenType: {
      type: String,
      required:"Token Type is required"
    },
    amountAllocated: {
      type: String,
      required:"Token Allocated is required"
    },
    email: {
      type: String
    },
    currentNonce:{
      type:String
    } 
  },

  { timestamps: true }
);
const inheritors =
  mongoose.models.user || mongoose.model("inheritor", inheritorSchema, "inheritor");
export default inheritors;