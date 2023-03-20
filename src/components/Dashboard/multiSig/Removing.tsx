import VaultIcon from "@images/Dashboard/multi/vault.svg";
import VaultStatus from "./vultStatus";

const RemovingSig = () => {
  return (
    <>
      <VaultStatus>
        <div>
          <VaultIcon />
        </div>
        <div className="text-xl">Removing multi-signatory</div>
      </VaultStatus>
    </>
  );
};

export default RemovingSig;
