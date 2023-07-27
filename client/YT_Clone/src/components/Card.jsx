import Styled from "styled-components";

const Container = Styled.div`
  width: 22.5rem;
  margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    border-radius: 0.5rem;
    cursor: pointer;
`;

const Image = Styled.img`
    width: 100%;
    height: 12.625rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #999;
`;

const Details = Styled.div`
    padding: 0.5rem;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
`;

const ChannelImage = Styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #999;
`;

const Texts = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Title = Styled.h1`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = Styled.h2`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textSoft};
    margin: 0.5625rem 0;
`;

const Info = Styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textSoft};
`;

function Card() {
  return (
    <Container>
      <Image src="http://localhost:5173/src/img/logo.png" />
      <Details>
        <ChannelImage src="http://localhost:5173/src/img/logo.png" alt="" />
        <Texts>
          <Title>Video Title</Title>
          <ChannelName>Channel Name</ChannelName>
          <Info>123456 Views * 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
}

export default Card;
