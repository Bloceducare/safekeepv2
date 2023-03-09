import ChevronLeft from '@images/transfer/arrow-left.svg';
import Withdraw from "./withdraw";
import Deposit from "./deposit";

const Transfer = ({transferType, setSection}) => {
  return (
    <div className="w-full">
      <div className="w-full lg:pl-40">
        <div className="pb-6 flex gap-4 items-center">
          <button onClick={(e)=> setSection('dashboard')} className='bg-safekeep-white rounded flex items-center py-2 px-2.5'>
            <ChevronLeft />
          </button>
          <p className='font-paralucentMedium text-xl leading-6 text-[#333D8A] capitalize'>{transferType} Token</p>
        </div>
        {
          transferType === 'withdraw' && (
              <Withdraw />
          )
        }

        {
          transferType === 'deposit' && (
              <Deposit />
          )
        }
      </div>
    </div>
  )
}

export default Transfer;