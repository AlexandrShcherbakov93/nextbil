import { FieldInputProps } from 'formik';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SelectChevron,
  SelectField,
  SelectOption,
  SelectOptionsBlock,
} from './styled-components';
import chevronImg from '../../img/chevron_down.svg';
import { ISelectProps } from '../FormikSelect';

export const CustomSelect = ({
  options,
  value,
  placeholder,
  name,
  setFieldValue,
}: FieldInputProps<string> & ISelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const closeSelect = useCallback((ev) => {
    if (ev.target !== ref.current && ev.target.parentNode !== ref.current) {
      setOpen(false);
    }
  }, []);

  const handleOption = useCallback(
    (value: string | number) => () => {
      setFieldValue(name, value);
    },
    [setFieldValue, name],
  );

  useEffect(() => {
    document.addEventListener('click', closeSelect);

    return () => document.removeEventListener('click', closeSelect);
  });

  const handleSelectClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <SelectField onClick={handleSelectClick} ref={ref}>
      <div onClick={handleSelectClick}>{value || placeholder}</div>
      <SelectChevron open={open} src={chevronImg} />
      <SelectOptionsBlock open={open}>
        {options.map(({ key, value, text }) => (
          <SelectOption onClick={handleOption(value)} key={key}>
            {text}
          </SelectOption>
        ))}
      </SelectOptionsBlock>
    </SelectField>
  );
};
