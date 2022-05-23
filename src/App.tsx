import "./App.css";
import { GlobalStyles } from "./utils/colors";
import { DarkModeProvider } from "./components/DarkMode/DarkModeProvider";
import { FullDescription } from "./components/FullDescription";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { MainDataError, MainPage } from "./components/MainPage";

const AppCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <AppCenter>
          <Routes>
            <Route path="/PokeAppka" element={<MainPage />} />
            <Route path="/PokeAppka/pokemon/:id" element={<FullDescription />} />
            <Route path="*" element={<MainDataError />} />
          </Routes>
        </AppCenter>
      </DarkModeProvider>
    </>
  );
}

export default App;
