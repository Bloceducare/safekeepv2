import { useState } from 'react';
import ArrowLeft from 'assets/images/inheritors/back.svg';
import EmptyInheritors from './empty-inheritors';
import Inheritors from './inheritors';
import AddInheritors from './addInheritors';
import DisconnectInheritors from './disconnectInheritors';
import Button from '@components/primitives/button';

const ConnectedInheritors = ({ setStep }) => {
  const [connectType, setConnectType] = useState('empty');
  return (
    <div className="w-full mx-auto max-w-[1100px] mt-8">
      <div className="w-full lg:flex items-center gap-4 justify-between">
        <div className="flex gap-3">
          <button>
            <ArrowLeft />
          </button>
          <p className="font-paralucentMedium text-lg text-[#333D8A]">Inheritors</p>
        </div>

        <div className="flex gap-5">
          <Button
            onClick={(e) => {
              setConnectType('add');
            }}
            type="solid"
          >
            Add Inheritor
          </Button>
          <Button
            type="outline"
            onClick={(e) => {
              setStep(null);
            }}
          >
            Disconnect
          </Button>
        </div>
      </div>
      <div className="w-full mx-auto">
        {connectType === 'empty' && <EmptyInheritors setConnectType={setConnectType} />}
        {connectType === 'add' && <AddInheritors setConnectType={setConnectType} />}
        {connectType === 'inheritors' && <Inheritors />}
      </div>
    </div>
  );
};

export default ConnectedInheritors;
