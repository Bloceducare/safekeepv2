
const VaultCreatedForm = () => {
  return (
    <div className="flex w-full flex-col">
        <div className="p-8 max-w-[590px] mx-auto flex flex-col items-center w-full bg-safekeep-transparent rounded-[18px]">
            <div className="w-full h-[50px] lg:h-[194px] py-4 px-2 bg-safekeep-blue-100 rounded-lg flex justify-end items-start">
            </div>
            <div className="mt-6 w-full">
                <p className="font-paralucentMedium tracking-tighter text-xl leading-5 lg:text-3xl lg:leading-9 text-[#011A91]">Safevault Created</p>
                <p className="mt-2 text-xs lg:text-sm font-dmSans leading-5 text-safekeep-gray-100 tracking-widest">Welcome to your brand new Vault.</p>
            </div>
             <div className="mt-6 lg:mt-10 w-full rounded-[18px] p-2.5 bg-[#F8F8F8] gap-6 flex flex-col">
                <div className="gap-2 flex flex-col w-full">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Your vault address</label>
                    <div className="w-full bg-[#FFF] rounded  h-9 border-none focus:border-none focus:outline-none p-2 flex gap-1">
                        <p className="font-dmSans text-sm leading-4 text-[#3A4662]">eth:0x45E7b6ad8dD0f02329ce34D21F4bB6218F497410</p>
                        <div className="w-auto flex gap-4">

                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-safekeep-blue rounded-lg py-4 font-paralucentMedium text-safe-light-100 text-sm leading-[14px]">
                Dashboard
            </button>
        </div>
    </div>
  )
}

export default VaultCreatedForm;