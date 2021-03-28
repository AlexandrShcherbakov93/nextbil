import { useField } from 'formik';
import React from 'react';
import { IInputProps } from '../../shared/types';
import { CustomSelect } from '../CustomSelect';
import { FormError } from '../SharedStyledComponents';

interface IOption {
  value: string | number;
  text: string;
  key: string | number;
}

export interface ISelectProps extends IInputProps {
  options: IOption[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
}

export const FormikSelect = (props: ISelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <CustomSelect {...field} {...props} />
      <FormError>{meta.touched && meta.error}</FormError>
    </div>
  );
};
