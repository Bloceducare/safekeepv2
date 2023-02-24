import React from 'react';

const FormAlert: React.FC = React.forwardRef<
HTMLSpanElement,
HtmlProps<HTMLSpanElement>
>((props, ref) => (
    <span
        ref={ref}
        role="alert"
        className="pt-1.5 font-[10px] block"
        {...props}
    />
));

FormAlert.displayName = 'FormAlert';

export default FormAlert;
