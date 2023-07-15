import styled from "styled-components";
import Menu from "../components/Menu.jsx";
import Navbar from "../components/Navbar.jsx";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>Video Wrapper...</Wrapper>
        </Main>
      </Container>
    </>
  );
}

export default App;
