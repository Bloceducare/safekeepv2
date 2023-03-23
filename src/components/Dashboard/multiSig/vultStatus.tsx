import { IChild } from "interface";

const VaultStatus = ({ children }: IChild) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-safekeep-blue-500 mr-2"></div>
          <div>
            <div className="text-safe-green-800 bg-safe-green-100 my-3  p-1 rounded-xl px-2">eth:0x45E7b6...8F497410</div>
          </div>
          <div className="text-xs text-safekeep-gray-200">My Friend</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default VaultStatus;
