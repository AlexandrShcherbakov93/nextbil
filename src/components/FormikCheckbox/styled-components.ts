import styled from 'styled-components';
import { HiddenInput } from '../FormikRadio/styled-components';

export const CheckboxIndicator = styled.div`
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  left: 0px;
  border: 1px solid #0094ff;
  border-radius: 3px;
  top: 50%;
  margin-top: -7px;

  ${HiddenInput}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${HiddenInput}:checked + &::after {
    display: block;
    top: 0.5px;
    left: 4px;
    width: 30%;
    height: 60%;
    border: solid #0094ff;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }

  &::disabled {
    cursor: not-allowed;
  }
`;
