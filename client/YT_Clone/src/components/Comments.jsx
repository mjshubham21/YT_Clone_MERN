import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid grey;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={logo} />
        <Input placeholder="Add a comment." />
      </NewComment>
    </Container>
  );
}

export default Comments;
