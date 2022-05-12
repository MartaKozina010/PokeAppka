import styled from "styled-components";
import { DarkModeToggler } from "../DarkMode/DarkModeToggler";
import { SearchInput } from "../SearchInput";
import { FilterTab } from "../FilterTab";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 360px;
  height: 100px;
  background-color: ${({ theme }) => theme.background};
  padding: 24px 16px 0 16px;
  border-radius: 12px 12px 0 0;
`

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  width: 360px;
  height: 540px;
  border-radius: 0 0 12px 12px;
  padding: 0 16px;
  overflow: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const ModesContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const AppName = styled.h1`
  margin-left: 16px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Pokeball = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledFilterAltIcon = styled(FilterAltIcon)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

export const BaseMainPage: React.FC = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Header>
          <StyledLink to="/PokeApp">
            <Pokeball src="/PokeApp/pokeball.svg" />
            <AppName>PokeApp</AppName>
          </StyledLink>
          <ModesContainer>
            <StyledFilterAltIcon onClick={() => setShowFilter(!showFilter)}/>
            <DarkModeToggler />
          </ModesContainer>
        </Header>
        <SearchInput />
      </HeaderContainer>
      <ContentContainer>
        {showFilter && <FilterTab />}
        {children}
      </ContentContainer>
    </>
  );
};
