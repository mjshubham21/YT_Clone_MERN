import styled from "styled-components";
import logo from "../img/logo.png";
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.7rem 0;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const Date = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.8rem;
  margin-left: 5px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`;

function Comment() {
  return (
    <Container>
      <Avatar src={logo} />
      <Details>
        <Name>John Doe</Name>
        <Date>2 days ago</Date>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quibusdam.
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
