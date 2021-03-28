import styled from 'styled-components';

export const SelectField = styled.div`
  display: flex;
  padding: 0px;
  background: #f5f8fa;
  height: 50px;
  border-radius: 8px;
  padding: 0 18px;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  & div {
    margin: auto 0;
    font-size: 14px;
    width: 100%;
    color: #a2a2a2;
  }
`;

interface ISelectOptionsBlockProps {
  open: boolean;
}

export const SelectOptionsBlock = styled.div`
  display: ${({ open }: ISelectOptionsBlockProps) => (open ? 'block' : 'none')};
  position: absolute;
  top: 56px;
  left: 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 8px #00000026;
  padding: 6px 0;
  z-index: 10;
`;

export const SelectOption = styled.div`
  padding: 10px 20px;
  :hover {
    background: #f5f8fa;
  }
  width: 100%;
  box-sizing: border-box;
`;

export const SelectChevron = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  transform: ${({ open }: ISelectOptionsBlockProps) =>
    open ? 'rotate(180deg)' : 'rotate(0)'};
  transition-property: transform;
  transition-duration: 0.5s;
`;
