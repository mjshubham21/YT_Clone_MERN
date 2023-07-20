import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  padding: 0.3rem 0.7rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 0.25rem;
  color: #3ea6ff;
  cursor: pointer;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.675rem;
  font-weight: bold;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search" />
          <SearchOutlined />
        </Search>
        <Button>
          <AccountCircleOutlined />
          Sign In
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
