import Modal from '@components/primitives/modal';
import ModalDescription from '@components/primitives/modal/body';
import ModalTitle from '@components/primitives/modal/title';
import Failed from './failed';
import InProgress from './inProgress';
import Successful from './successful';

const Loaders = ({ loaderTypes = 'failed' }) => {
  const LoaderComponent = {
    failed: <Failed />,
    progress: <InProgress />,
    success: <Successful />,
  };
  return (
    <Modal open={true} showClose={false} className=" w-full max-w-[270px] p-8 bg-[#FFFFFF] mx-auto rounded-lg">
      <div className="w-full">
        <ModalDescription>{loaderTypes && LoaderComponent[loaderTypes]}</ModalDescription>
      </div>
    </Modal>
  );
};

export default Loaders;
