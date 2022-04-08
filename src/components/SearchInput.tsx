import React, { useContext} from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { BasicInput } from "./ComponentBase/Input";
import { InputContext } from "./MainPage";

const Search = styled(BasicInput)`
  margin-bottom: 10px;
  background-image: url("lupa.svg");
  background-repeat: no-repeat;
  padding-left: 40px;
  background-position: 10px 6px;
`;

export const SearchInput: React.FC = () => {
  const inputContext = useContext(InputContext);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
      <Search
        placeholder="search"
        onChange={inputContext.inputHandler}
        value={inputContext.input}
        ref={inputRef}
      />
  );
};
