import ArrowDown from '@images/Dashboard/arrow-down.svg';
import FeaturedIcon from '@images/Dashboard/featured-icon.svg';
import SingleTransaction from '@components/Dashboard/Transaction/single-transaction';


const Transaction = () => {
  return (
   <div className="w-full">
    <div className="flex flex-col gap-4 mb-5 items-start lg:hidden justify-between">
          <p className="font-paralucentMedium text-[#333D8A] text-lg leading-5">Transaction History</p>
          <div className='gap-6 flex font-paralucentLight text-sm leading-4 items-center'>
            <p className="text-[#0123F7]">
              pending
            </p>
            <a href="/dashboard/transactions" className="py-1 px-5 rounded-lg bg-safekeep-blue text-safekeep-hover ">
              History
            </a>
          </div>
      </div>
    <div className="pt-11 hidden pb-7 lg:flex flex-col gap-10 px-10 w-full bg-safekeep-white rounded-lg">
        <div className="flex flex-row items-center w-full justify-between">
            <p className="font-paralucentMedium text-[#333D8A] text-lg leading-5">Transaction History</p>
            <div className='gap-6 flex font-paralucentLight text-sm leading-4 items-center'>
              <p className="text-[#0123F7]">
                pending
              </p>
              <a href="/dashboard/transactions" className="py-1 px-5 rounded-lg bg-safekeep-blue text-safekeep-hover ">
                History
              </a>
            </div>
        </div>
        <div className="border-[0.5px] flex border-solid gap-2 border-safe-light-600 w-full p-3 rounded-lg font-dmSans font-medium text-sm text-[#545D9D]">
          <div className="w-full max-w-[15%] flex items-center">
            <p>Action</p>
          </div>
          <div className="w-full max-w-[15%] flex items-center justify-center">
            <p>Amount</p>
          </div>
          <div className="w-full max-w-[15%] flex items-center justify-center">
            <p>Authenticated</p>
          </div>
           <div className="w-full max-w-[20%] flex items-center justify-center">
            <p>Address</p>
          </div>
           <div className="w-full max-w-[15%] flex items-center justify-center">
            <p>Token</p>
          </div>
           <div className="w-full max-w-[20%] flex items-center justify-center">
            <p>Status</p>
          </div>
        </div>
       <div className="w-full">
        <SingleTransaction />
       </div>
    </div>
    <div className="w-full lg:hidden">
      <SingleTransaction />
    </div>
    {
      false && (
            <div className='max-w-[363px] w-full p-5 flex flex-col items-center mx-auto mt-10 bg-[#FFFFFF] rounded-[10px]'>
              <FeaturedIcon />
              <p className="mt-4 text-xl font-dmSans font-semibold text-[#101828]">No Transactions</p>
              <p className="mt-4 text-sm leading-5 font-dmSans text-center text-[#475467]">View all your transactions on your Safevault by adding assets & Tokens.</p>
              <button className="flex w-full lg:mt-11 gap-2.5 items-center rounded-lg bg-[#0171FD] justify-center p-4 text-safekeep-white font-paralucentMedium text-sm">
                    <ArrowDown />
                    <p>Deposit Token</p>
              </button>
            </div>
      )
    }
   </div>
  )
}

export default Transaction;