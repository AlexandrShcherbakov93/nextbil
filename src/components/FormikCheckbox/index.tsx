import { useField } from 'formik';
import React from 'react';
import { FormError } from '../SharedStyledComponents';
import { IInputProps } from '../../shared/types';
import { CheckboxIndicator } from './styled-components';
import { CustomLabel, HiddenInput } from '../FormikRadio/styled-components';

export interface ICheckboxProps extends IInputProps {
  id: string;
  text: React.ReactElement | string;
}

export const FormikCheckboxWithLabel = ({
  id,
  text,
  ...otherProps
}: ICheckboxProps) => {
  const [field, meta] = useField({ ...otherProps });

  return (
    <div>
      <CustomLabel htmlFor={id}>
        {text}
        <HiddenInput type="checkbox" id={id} {...field} />
        <CheckboxIndicator />
      </CustomLabel>
      <FormError>{meta.touched && meta.error}</FormError>
    </div>
  );
};
