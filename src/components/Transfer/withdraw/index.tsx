import ChevronLeft from '@images/transfer/arrow-left.svg';
import FormProvider from "../../primitives/form-provider";
import StepOne from './step-one';
import StepTwo from './step-two';

const Withdraw= () => {
  const handleSubmit = (e)=>{
    console.log(e)
  }
  return (
    <div className="w-full">
      {/* <div className="pb-6 flex gap-4 items-center">
        <button className='bg-safekeep-white rounded flex items-center py-2 px-2.5'>
          <ChevronLeft />
        </button>
        <p className='font-paralucentMedium text-xl leading-6 text-[#333D8A]'>Withdraw Token</p>
      </div> */}
      <div className='w-full lg:max-w-[596px] p-8 bg-safekeep-white rounded-lg'>
        <FormProvider onSubmit={handleSubmit}>
          <StepOne />
          {/* <StepTwo /> */}
        </FormProvider>
      </div>
    </div>
  )
}

export default Withdraw;