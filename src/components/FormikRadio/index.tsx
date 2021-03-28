import { useField } from 'formik';
import React from 'react';

import { ICheckboxProps } from '../FormikCheckbox';
import { HiddenInput, RadioIndicator, CustomLabel } from './styled-components';

interface IRadioProps extends ICheckboxProps {
  value: string | number;
}

export const FormikRadioWithLabel = ({
  id,
  text,
  ...otherProps
}: IRadioProps) => {
  const [field] = useField(otherProps);

  return (
    <CustomLabel htmlFor={id}>
      {text}
      <HiddenInput type="radio" id={id} {...field} />
      <RadioIndicator />
    </CustomLabel>
  );
};
