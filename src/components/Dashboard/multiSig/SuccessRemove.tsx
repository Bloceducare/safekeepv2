import VaultIcon from "@images/Dashboard/multi/vaultsuccess.svg";
import VaultStatus from "./vultStatus";

const SuccessRemove = () => {
  return (
    <>
      <VaultStatus>
        <div>
          <VaultIcon />
        </div>
        <div className="text-xl">Multi-signatory successfully removed</div>
      </VaultStatus>
    </>
  );
};

export default SuccessRemove;
