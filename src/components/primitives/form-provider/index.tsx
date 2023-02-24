import React from 'react';
import {
    Control,
    FieldErrors,
    FieldValues,
    SubmitHandler,
    useForm, UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister, UseFormReset,
    UseFormSetValue,
    FormProvider as RootFormProvider,
} from 'react-hook-form';

export interface FormContext {
    register: UseFormRegister<FieldValues>;
    control: Control;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    errors: FieldErrors;
    setValue: UseFormSetValue<any>;
    getValues: UseFormGetValues<any>
    reset: UseFormReset<any>
}

export interface FormProviderProps {
    onSubmit: SubmitHandler<FieldValues>;
    children: React.ReactNode | React.ReactNode[] | string | null | undefined;
}

const FormContext = React.createContext<FormContext>(null as any);

const FormProvider = React.forwardRef<HTMLFormElement, FormProviderProps>(
    ({ children, onSubmit }, ref) => {
        const props = useForm();
        const {
            register,
            handleSubmit,
            control,
            formState: { errors },
            setValue,
            getValues,
            reset,
        } = props;
        const value = React.useMemo(() => ({
            register, control, handleSubmit, errors, setValue, getValues, reset,
        }), [control, errors, getValues, handleSubmit, register, reset, setValue]);

        return (
            <FormContext.Provider
                value={value}
            >
                <RootFormProvider {...props}>
                    <form
                        ref={ref}
                        className="w-full"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {children}
                    </form>
                </RootFormProvider>
            </FormContext.Provider>
        );
    },
);

FormProvider.displayName = 'FormProvider';

export default FormProvider;

export const useFormProvider = (): FormContext | undefined => React.useContext(FormContext);
