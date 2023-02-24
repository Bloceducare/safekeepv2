import React from "react";

interface FormAlertProps {
  children: string;
}

const FormAlert = (({children}: FormAlertProps) => <span role="alert" className="pt-1.5 font-[10px] block">{children} </span>);

export default FormAlert;
