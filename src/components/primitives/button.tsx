import ConnectButton from "@components/ConnectButton";
import { useAccount } from "wagmi";

const buttonType = {
  solid: "bg-safekeep-blue w-ull text-safekeep-white p-2 py-3 px-6 rounded-[8px] [&>*]:font-paralucentMedium",
  outline: "border border-safekeep-blue text-safekeep-blue px-6  wfull  p-2 py-3 rounded-[8px]"
};
const Button = ({ children, type = "solid", className = "", onlyBtn=false, ...props }) => {
  const { isConnected } = useAccount();

  if (!isConnected && !onlyBtn) {
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
