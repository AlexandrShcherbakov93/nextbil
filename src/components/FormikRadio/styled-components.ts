import styled from 'styled-components';

export const HiddenInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const CustomLabel = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 24px;
  font-size: 14px;
  cursor: ${(props: { disabled?: boolean }) =>
    props.disabled ? 'not-allowed' : 'pointer'};
`;

export const RadioIndicator = styled.div`
  box-sizing: border-box;
  border: 1px solid #0094ff;
  border-radius: 7px;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 50%;
  margin-top: -7px;
  left: 0px;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${HiddenInput}:checked + &::after {
    display: block;
    border-radius: 4px;
    background-color: #0094ff;
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${HiddenInput}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;
