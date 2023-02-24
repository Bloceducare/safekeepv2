import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VaultSchema = new Schema(
  {
    vaultName: {
      type: String,
    },
    owner: {
      type: String,
    },
    backupAddress: {
      type: String,
    },
    vaultAddress: {
      type: String,
    },
    backupName: {
      type: String,
    },
  },

  { timestamps: true }
);
const Vaults =
  mongoose.models.Vault || mongoose.model("Vault", VaultSchema, "Vault");
export default Vaults;