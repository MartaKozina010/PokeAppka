import { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "./DarkModeProvider";

const Icon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

export const DarkModeToggler: React.FC = () => {
  const DarkModeContext = useContext(DarkThemeContext);

  return (
    <Icon
      src={DarkModeContext.isDarkMode ? "/PokeApp/sun.svg" : "/PokeApp/moon.svg"}
      onClick={DarkModeContext.setDarkMode}
    />
  );
};
