import * as Dialog from "@radix-ui/react-dialog";
import { IChild } from "interface";

const ModalDescription = ({ children }: IChild) => {
  return (
    <>
      <Dialog.Description className="text-mauve12 m-0 text-[17px] font-medium">{children ? children : "Edit "}</Dialog.Description>
    </>
  );
};

export default ModalDescription;
