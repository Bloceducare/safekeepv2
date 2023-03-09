import CopyLogo from "@images/transfer/copy.svg";
import SendLogo from "@images/transfer/send.svg";
import ScanLogo from "@images/transfer/scan.svg";
import InformationLogo from "@images/transfer/information.svg";

const DepositModal = () => {
    return (
    <div className="w-full">
        <input className="modal-state" id="modal-1" type="checkbox" checked/>
        <div className="modal">
            <label className="modal-overlay bg-[#000000] opacity-30" htmlFor="modal-1"></label>
                <div className="modal-content max-w-[544px] w-full flex flex-col mx-auto">
                    <div className="w-full flex flex-col bg-[#FFFFFF] rounded-[18px] p-8 items-center gap-5">
                        <p className="font-dmSans text-sm leading-5 text-safekeep-gray-100">This is the address of your Safe. Deposit funds by scanning the QR code or copying the address below.</p>
                        <div className="w-full rounded-lg bg-safekeep-hover py-2.5 px-2 flex gap-5 items-center justify-between">
                            <p className="break-all font-dmSans text-sm leading-4 text-[#3A4662]">0x45E7b6ad8dD0f02329ce34D21F4bB6218F497410</p>
                            <div className="flex gap-2">
                                <CopyLogo />
                                <SendLogo />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border-[0.75px] rounded-[5px] mb-2 border-solid border-[#000000] p-2 font-dmSans text-[10px] leading-3">
                                Or Scan the QR
                            </div>
                            <ScanLogo />
                        </div>
                        <button type='submit' className="mt-5 w-full rounded-lg py-4 bg-safekeep-blue flex items-center justify-center font-paralucentMedium text-xs text-safekeep-white">
                            Done
                        </button>
                    </div>
                    <div className="mt-14 w-full py-5 px-3 bg-[#F5FDFF] rounded-lg flex gap-1.5">
                        <InformationLogo  />
                        <p className="font-polySansTrial text-sm leading-4 text-[#FF0000]">
                            Only send ETH and tokens (e.g. ERC20, ERC721) to this address.
                        </p>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default DepositModal;