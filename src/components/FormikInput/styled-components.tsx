import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding: 0px;
  background: #f5f8fa;
  height: 50px;
  border-radius: 8px;
  padding: 0 18px;
  vertical-align: middle;

  & > input {
    background: transparent;
    border: none;
    box-shadow: none;
    font-size: 14px;
    width: 100%;
    color: #a2a2a2;
    ::placeholder {
      color: #a2a2a2;
      font-size: 14px;
    }
  }
  & > input:focus {
    outline: none;
  }
  & > img {
    width: 20px;
    height: 20px;
    margin: auto 12px auto 0;
  }
`;
