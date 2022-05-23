import { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "./DarkModeProvider";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const StyledLightModeIcon = styled(LightModeIcon)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

const StyledDarkModeIcon = styled(DarkModeIcon)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

export const DarkModeToggler: React.FC = () => {
  const DarkModeContext = useContext(DarkThemeContext);

  return (
      DarkModeContext.isDarkMode ? 
        <StyledLightModeIcon onClick={DarkModeContext.setDarkMode}/> :
        <StyledDarkModeIcon onClick={DarkModeContext.setDarkMode}/>
  );
};


