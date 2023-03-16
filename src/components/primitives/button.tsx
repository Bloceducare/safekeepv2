import ConnectButton from "@components/ConnectButton";
import { useAccount } from "wagmi";
const Button = ({ children, type = "solid", className = "", ...props }) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <ConnectButton />;
  }
  return (
    <>
      <button {...props} className={`${type == "solid" ? "bg-safekeep-blue w-full text-safekeep-white p-2 py-3 rounded-[8px]" : ""} ${className} `}>
        {children}
      </button>
    </>
  );
};

export default Button;
