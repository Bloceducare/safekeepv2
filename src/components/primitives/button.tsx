import ConnectButton from "@components/ConnectButton";
import { useAccount } from "wagmi";

const buttonType = {
  solid: "bg-safekeep-blue w-full text-safekeep-white p-2 py-3 rounded-[8px]",
  outline: "border border-safekeep-blue text-safekeep-blue  w-full  p-2 py-3 rounded-[8px]"
};
const Button = ({ children, type = "solid", className = "", ...props }) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <ConnectButton />;
  }
  return (
    <>
      <button {...props} className={`${buttonType[type]} ${className}  `}>
        {children}
      </button>
    </>
  );
};

export default Button;
