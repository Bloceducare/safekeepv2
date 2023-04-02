import { useState } from 'react';
import FormProvider from '@components/primitives/form-provider';
import FormOne from './form-one';
import FormTwo from './form-two';
import FormThree from './form-three';
import FormFour from './form-four';
import FormProfile from 'assets/images/inheritors/form-profile.svg';
import Modal from '@components/primitives/modal';
import ModalDescription from '@components/primitives/modal/body';
import ModalTitle from '@components/primitives/modal/title';

const AddInheritors = ({ setConnectType }) => {
  const [step, setStep] = useState('one');
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    console.log(e);
    if (step === 'one') {
      setFormData({ ...formData, ...e });
      setStep('two');
    } else if (step === 'two') {
      setFormData({ ...formData, ...e });
      setStep('three');
    } else if (step === 'three') {
      setFormData({ ...formData, ...e });
      setStep('four');
    }
  };
  return (
    <Modal
      open={true}
      handleCloseButton={(e) => {
        setConnectType(null);
      }}
      className="w-full max-w-[318px] p-9 lg:max-w-[462px] bg-[#FFFFFF] mx-auto"
    >
      <div className="w-full">
        <ModalTitle>
          <FormProfile />
        </ModalTitle>
        <ModalDescription>
          <div>
            <div>
              <FormProvider onSubmit={handleSubmit}>
                {step === 'one' && <FormOne />}
                {step === 'two' && <FormTwo />}
                {step === 'three' && <FormThree />}
                {step === 'four' && <FormFour formData={formData} setConnectType={setConnectType} />}
              </FormProvider>
            </div>
          </div>
        </ModalDescription>
      </div>
    </Modal>
  );
};

export default AddInheritors;
