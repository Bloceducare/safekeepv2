import * as Dialog from "@radix-ui/react-dialog";
import { IChild } from "interface";

const ModalTitle = ({ children }: IChild) => {
  return (
    <>
      <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">{children ? children : "Edit "}</Dialog.Title>
    </>
  );
};

export default ModalTitle;
