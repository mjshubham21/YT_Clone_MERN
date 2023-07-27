import styled, { ThemeProvider } from "styled-components";
import Menu from "../components/Menu.jsx";
import Navbar from "../components/Navbar.jsx";
import { darkTheme, lightTheme } from "../utils/Theme.js";
import { useState } from "react";

//React Router Dom
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  // Router,
  // Link,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Video from "../pages/Video.jsx";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="video">
                      <Route path=":id" element={Video} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
