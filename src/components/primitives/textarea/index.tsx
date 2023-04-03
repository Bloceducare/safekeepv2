import React from "react";
import type  {}  from 'next/document';
import { useFormProvider } from "../form-provider";
import FormAlert from "../form-alert";
import usePersistedId from "../utils/use-persisted-id";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  validationRegex?: RegExp;
  minLength?: number;
  maxLength?: number;
  validationErrorMessage?: string | ((type: "pattern" | "minLength" | "maxLength" | "required") => string);
  required?: boolean;
  className?: string;
  value?: string | number;
  onChange?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  showError?: boolean;
  placeholderClassName?:string
  rows?:number
}

const TextArea = ({
  name,
  validationRegex,
  minLength,
  maxLength,
  validationErrorMessage,
  required = false,
  className,
  value,
  onChange,
  onBlur,
  disabled,
  showError = true,
  placeholder,
  rows=4,
  ...props
}: InputProps): JSX.Element => {
  if (name === undefined || name === null) {
    throw new Error(`Name is not defined in TextAreas. This is required.`);
  }


  const typeRules =  undefined 

  const formContext = useFormProvider();

  const id = usePersistedId();

  const registerFn =
    formContext && formContext.register
      ? formContext.register(name, {
          pattern: validationRegex || typeRules,
          minLength,
          maxLength,
          required,
          onChange,
          onBlur,
          disabled,
          value
        })
      : {
          required,
          onChange,
          onBlur,
          disabled,
          value
        };

  return (
    <div className="w-full">
      <span className="relative">
        <textarea
          id={id}
          rows={rows}
          aria-invalid={formContext && formContext.errors && formContext.errors[name] ? "true" : "false"}
          className={`p-3 w-full bg-white color-[#3A4662] placeholder-[#04163f] text-base leading-6 rounded-lg border border-solid border-safekeep-gray-400 ${className} ${
            formContext && formContext.errors[name] ? "border-[#FF8A8A] outline-[#FF8A8A]" : ""
          }`}
          placeholder={placeholder}
          {...registerFn}
        //   {...props}
        
        />
      </span>
      <div className="text-[#FF8A8A] text-xs">
        {formContext && formContext.errors && formContext.errors[name] && !validationErrorMessage && (
          <>
            {formContext?.errors[name]?.type === "required" && showError && <FormAlert>This Field is required</FormAlert>}
            {formContext?.errors[name]?.type === "pattern" && showError && (
              <>
              </>
            )}
            {formContext?.errors[name]?.type === "maxLength" && <FormAlert>Maximum length exceeded</FormAlert>}
            {formContext?.errors[name]?.type === "minLength" && <FormAlert>Not long enough</FormAlert>}
          </>
        )}
      </div>
    </div>
  );
};

export default TextArea
