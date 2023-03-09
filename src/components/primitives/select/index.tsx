import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import CheckIcon from '@images/transfer/check-icon.svg';
import { useFormProvider } from '../form-provider';
import FormAlert from '../form-alert';
import ArrowDown from '@images/transfer/arrow-down.svg';

export interface SelectOptionProps { children: React.ReactNode | string, value: string; disabled?: boolean }

export const SelectOption: React.FC<SelectOptionProps> = ({
    children,
    value,
    disabled,
}) => (
    <SelectPrimitive.Item
        style={{
            fontSize: '14px',
            fontFamily: 'Beausite',
            fontWeight: '350',
            lineHeight: '85%',
            color: '#000',
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            height: 'auto',
            padding: '10px 10px',
            position: 'relative',
            userSelect: 'none',
            transition: 'all 0.1s, padding 0.3s',

        }}
        className='hover:text-white hover:bg-[#0171FD] flex items-center'
        value={value}
        disabled={disabled}
        aria-disabled={disabled}
    >
        <SelectPrimitive.ItemText>
            {children}
        </SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator
            style={{
                position: 'absolute',
                right: 0,
                width: 25,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {value !== '' && <CheckIcon />}
        </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
);

export interface SelectProps {
    paddingTop?: string;
    onChange?(value: string): void;
    onBlur?(value: boolean): void;
    value?: string;
    children: any;
    name: string;
    arrowLeft?: boolean
    variant?: string
    width?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    className?: string
}

const Select = ({
    children,
    onChange,
    onBlur,
    placeholder,
    name,
    required,
    disabled,
    value,
    className,
    variant,
    width = '100%',
    arrowLeft = false,
}: SelectProps) : JSX.Element => {
      if (name === undefined || name === null) {
    throw new Error(`Name is not defined in Select. This is required.`);
  }

    const formContext = useFormProvider();

    if (!children) {
        // eslint-disable-next-line no-param-reassign
        children = [
            <SelectOption disabled value="NA">
                No options available.
            </SelectOption>,
        ];
    }

    if (!Array.isArray(children)) {
        // eslint-disable-next-line no-param-reassign
        children = [children];
    }

    if (placeholder) {
        // eslint-disable-next-line no-param-reassign
        children = [
            <SelectOption disabled value={placeholder}>
                {placeholder}
            </SelectOption>,
            children,
        ].flat();
    }

    React.useEffect(() => {
        if (!placeholder && formContext) {
            formContext.setValue(name, children[0].props.value);
        }
    }, [children, formContext, name, placeholder]);

    return (
        <div className="w-full pb-0 h-full relative">
            <SelectPrimitive.Root
                onValueChange={(e) => {
                    if (onChange) {
                        onChange(e);
                    }
                    if (formContext) {
                        formContext.setValue(name, e);
                    }
                }}
                onOpenChange={onBlur}
                value={value || undefined}
                name={name}
                required={required}
                defaultValue={children[0].props.value}
                {...formContext?.register(name, { required })}
                // className="relative"
                // style={{
                //     position: 'relative'
                // }}
            >
                <SelectPrimitive.SelectTrigger
                    style={{
                        width: '100%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: arrowLeft ? 'flex-start' : 'space-between',
                        fontSize: 15,
                        lineHeight: 1,
                        userSelect: 'none',
                        height: '100%',
                        gap: 5,
                        textAlign: 'left',
                        color: '#040503',
                        borderRadius: '0px',
                        border: 'none',
                    }}
                    className={`${className} focus:border-none`}
                    aria-label={name}
                    disabled={disabled}
                    aria-disabled={disabled}
                >
                    {arrowLeft && (
                        <div className="pr-2">
                            <ArrowDown />
                        </div>
                    )}
                    <SelectPrimitive.Value className="w-full text-left"/>
                    {!arrowLeft && (
                        <SelectPrimitive.Icon>
                            <ArrowDown
                                // style={{
                                //     width: '15px',
                                //     height: '6px',
                                // }}
                            />
                        </SelectPrimitive.Icon>
                    )}
                </SelectPrimitive.SelectTrigger>
                <div className='relative'>
                    <SelectPrimitive.Content
                        style={{
                            overflow: 'hidden',
                            background: 'rgba(255, 255, 255, 1)',
                            position: 'relative',
                            // backdropFilter: 'blur(5px)',
                            width: '100%',
                            borderRadius: 3,
                            zIndex: 200,
                            // border: '1px solid var(--color-gray-mittelgrau)',
                            // boxShadow: 'rgb(22 23 24 / 35%) 0px 0px 15px -4px, rgb(255 255 255) 0px 0px 0px 1px, rgb(22 23 24 / 35%) 0px 10px 38px -10px, rgb(22 23 24 / 20%) 0px 10px 20px -15px',

                        }}
                    >
                        <SelectPrimitive.SelectScrollUpButton
                           className="flex text-white bg-[#9db8d1] justify-center items-center cursor-default"
                        >
                            {/* <ChevronUpIcon /> */}
                        </SelectPrimitive.SelectScrollUpButton>
                        <SelectPrimitive.Viewport
                            style={{
                                padding: '5px',
                            }}
                        >
                            {children}
                        </SelectPrimitive.Viewport>
                        <SelectPrimitive.SelectScrollDownButton
                            className="flex text-white bg-[#9db8d1] justify-center items-center cursor-default"
                        >
                            {/* <ChevronDownIcon /> */}
                        </SelectPrimitive.SelectScrollDownButton>
                    </SelectPrimitive.Content>
                </div>
            </SelectPrimitive.Root>
            {formContext?.errors[name]?.type === 'required' && (
                <FormAlert>This field is required</FormAlert>
            )}
        </div>
    );
};

export default Select;
