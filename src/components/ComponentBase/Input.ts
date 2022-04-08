import styled from "styled-components";

export const BasicInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 22px;
  border-radius: 12px;
  border: 1px solid lightgray;
  padding: 4px;
  font-size: 10px;
  color: grey;

  ::placeholder {
    color: lightgray;
  }

  :focus {
    outline: 1px solid grey;
  }

  :hover {
    background-color: #fbfbfb;
  }
`;
