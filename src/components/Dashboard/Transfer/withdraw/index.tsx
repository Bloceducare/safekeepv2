import { useState } from 'react';
import ChevronLeft from '@images/transfer/arrow-left.svg';
import FormProvider from '@components/primitives/form-provider';
import StepOne from './step-one';
import StepTwo from './step-two';

const Withdraw= () => {
  const [step, setStep] = useState("one");
  const [formData, setFormData] = useState(null);
  const handleSubmit = (e)=>{
    setFormData(e)
    if(step==="one"){
      setStep("two")
    }
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
          {
           step==="one" ? (
            <StepOne />
           ) : (
            <StepTwo formData={formData}/>
           )
          }
        </FormProvider >
      </div>
    </div>
  )
}

export default Withdraw;