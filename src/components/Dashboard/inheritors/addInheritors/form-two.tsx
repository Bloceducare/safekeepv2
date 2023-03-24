import Input from "@components/primitives/input";
import TrashSquare from "assets/images/inheritors/trash-square.svg"

const FormTwo = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-1.5 py-3">
                <p className="text-2xl font-paralucentMedium text-[#001873]">Inheritors Email Address</p>
                <p className="text-sm font-dmSans text-[#606060]">To ensure your allocated assets are promptly claimed by the inheritor, Safekeep automatically reminds them via an email address you provide below.</p>
            </div>
            <div className="bg-safekeep-hover rounded-lg mt-6 w-full">
                 <Input name="address" className="p-4 rounded-lg w-full border-none focus:border-none placeholder:text-[#B2B7C2] text-xs font-dmSans" placeholder="Enter email here" />
            </div>
             <button className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]">Next</button>
        </div>
    )
}

export default FormTwo;