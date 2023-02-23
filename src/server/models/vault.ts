import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VaultSchema = new Schema(
  {
    name: {
      type: String,
    },
    owner: {
      type: String,
    },
    address: {
      type: String,
    },
  },

  { timestamps: true }
);
const Vaults =
  mongoose.models.Vault || mongoose.model("vault", VaultSchema, "vault");
export default Vaults;