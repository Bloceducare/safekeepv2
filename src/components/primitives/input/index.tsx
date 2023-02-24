import React from "react";
import type  {}  from 'next/document';
import { useFormProvider } from "../form-provider";
import FormAlert from "../form-alert";
import usePersistedId from "../utils/use-persisted-id";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  type?: "email" | "text" | "tel" | "number" | "password";
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
}

const Input = ({
  type = "text",
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
  ...props
}: InputProps): JSX.Element => {
  if (name === undefined || name === null) {
    throw new Error(`Name is not defined in Input. This is required.`);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (type === "submit") {
    throw new Error('The Input Primitive should not be used as a submit button. Please use <button type="submit" /> instead.');
  }

  const typeRules = {
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    tel: /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g,
    number: /^-?\d+\.?\d*$/,
    text: undefined
  }[type];

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
        <input
          id={id}
          aria-invalid={formContext && formContext.errors && formContext.errors[name] ? "true" : "false"}
          type={type}
          className={`p-3 w-full bg-white color-[#3A4662] placeholder-[#B2B7C2] text-base leading-6 rounded-lg border border-solid border-safekeep-gray-400 ${className} ${
            formContext && formContext.errors[name] ? "border-[#FF8A8A] outline-[#FF8A8A]" : ""
          }`}
          {...registerFn}
          {...props}
        />
      </span>
      <div className="text-[#FF8A8A] text-xs">
        {formContext && formContext.errors && formContext.errors[name] && !validationErrorMessage && (
          <>
            {formContext?.errors[name]?.type === "required" && showError && <FormAlert>This Field is required</FormAlert>}
            {formContext?.errors[name]?.type === "pattern" && showError && (
              <>
                {type === "password" && <FormAlert>This password is not strong enough.</FormAlert>}
                {type === "email" && <FormAlert>Please enter a valid email.</FormAlert>}
                {type === "tel" && <FormAlert>Please enter a valid phone number.</FormAlert>}
                {type === "number" && <FormAlert>Please enter a valid phone number.</FormAlert>}
                {type !== "password" && type !== "tel" && type !== "email" && type !== "number" && <FormAlert>This is invalid.</FormAlert>}
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

export default Input;
