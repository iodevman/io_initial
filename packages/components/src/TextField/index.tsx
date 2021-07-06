import { getFormError } from '@udp/core';
import React, { InputHTMLAttributes } from 'react';
import {
  Control,
  FieldName,
  FieldValues,
  useController,
} from 'react-hook-form';

type Props<TFieldValues extends FieldValues = FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    name: FieldName<TFieldValues>;
    control: Control<TFieldValues>;
  };

const TextField = ({ control, name, ...rest }: Props) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    rules: { required: true },
    defaultValue: '',
  });
  const error = invalid ? (
    <div className="invalid-feedback">{getFormError(name, errors)}</div>
  ) : null;

  return (
    <>
      <input {...inputProps} {...rest} />
      {error}
    </>
  );
};

export default TextField;
