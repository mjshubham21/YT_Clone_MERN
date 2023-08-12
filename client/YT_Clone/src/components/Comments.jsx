import styled from "styled-components";
import logo from "../img/logo.png";
import Comment from "./Comment";

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
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
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
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
