import { useField } from 'formik';
import React from 'react';
import { IInputProps } from '../../shared/types';
import { FormError } from '../SharedStyledComponents';
import InputField from './styled-components';

export interface ITextInputProps extends IInputProps {
  imgSrc?: string;
}

export const FormikInput = ({ imgSrc, ...props }: ITextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <InputField>
        {imgSrc && <img src={imgSrc} alt="img" />}
        <input {...props} {...field} />
      </InputField>
      <FormError>{meta.touched && meta.error}</FormError>
    </div>
  );
};
