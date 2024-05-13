import { Input } from '@chakra-ui/react';
import React from 'react';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <Input
      className={className}
      isInvalid={!!error}
      maxLength={maxLength}
      placeholder={label}
      required={required}
      {...restOfProps}
    />
  )
);
