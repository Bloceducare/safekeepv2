import * as Dialog from "@radix-ui/react-dialog";
import { IChild } from "interface";

const ModalToggle = ({ children }: IChild) => {
  return (
    <>
      <Dialog.Trigger asChild>
        <>{children} test tr</>
      </Dialog.Trigger>
    </>
  );
};

export default ModalToggle;
