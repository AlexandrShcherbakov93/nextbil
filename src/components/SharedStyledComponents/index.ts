import styled from 'styled-components';

interface IBlock {
  mr?: string; // margin
  pd?: string; // padding
}
/**
 * @param {string} mr - margin
 * @param {string} pd - padding
 */
export const Block = styled.div`
  margin: ${({ mr }: IBlock) => mr || '0px'};
  padding: ${({ pd }: IBlock) => pd || '0px'};
`;

interface IGridContainer extends IBlock {
  gtc?: string; // grid-template-columns
  gtr?: string; // margin
  gg?: string; // grid-gap
}
/**
 * @param {string} gtc - grid-template-columns
 * @param {string} gtr - font-size
 * @param {string} gg - grid-gap
 */
export const GridContainer = styled(Block)`
  display: grid;
  grid-template-columns: ${({ gtc }: IGridContainer) => gtc || ''};
  grid-template-rows: ${({ gtr }: IGridContainer) => gtr || ''};
  grid-gap: ${({ gg }: IGridContainer) => gg || '0px'};
`;

interface IFormHeader {
  mr?: string; // margin
  hg?: string; // margin
  fs?: string; // margin
}
/**
 * @param {string} mr - margin
 * @param {string} hg - height
 * @param {string} fs - font-size
 */
export const FormHeader = styled.h1`
  text-align: center;
  margin: ${({ mr }: IFormHeader) => mr || '0px'};
  height: ${({ hg }: IFormHeader) => hg || '34px'};
  font-size: ${({ fs }: IFormHeader) => fs || '28px'};
`;

interface IFormError extends IBlock {
  hg?: string; // margin
  fs?: string; // margin
}
/**
 * @param {string} hg - height
 * @param {string} fs - font-size
 */
export const FormError = styled(Block)`
  color: #e82828;
  padding-left: 18px;
  font-style: normal;
  letter-spacing: 0px;
  height: ${({ hg }: IFormError) => hg || '13px'};
  font-size: ${({ fs }: IFormError) => fs || '10px'};
`;

interface ISubmitButtonProps {
  notValid?: boolean;
}
/**
 * @param {string} notValid - notValid
 */
export const FormSubmitButton = styled.button`
  height: 62px;
  border: none;
  border-radius: 31px;
  background: #0094ff;
  color: white;
  cursor: pointer;
  outline: none;
  background: ${({ notValid }: ISubmitButtonProps) =>
    notValid ? '#a2a2a2' : ' #0094ff'};
`;

export const FakeLink = styled.span`
  color: #0094ff;
  :hover {
    text-decoration: underline;
  }
`;
