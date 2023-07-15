import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 0.875rem;
`;

const Wrapper = styled.div`
  padding: 1.125rem 1.625rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Img = styled.img`
  width: 2.5rem;
`;

function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} alt="logo" />
          MJtube
        </Logo>
      </Wrapper>
    </Container>
  );
}

export default Menu;
