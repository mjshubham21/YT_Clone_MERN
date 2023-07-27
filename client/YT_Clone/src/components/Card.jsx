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

function Card() {
  return (
    <Container>
      <Image src="http://localhost:5173/src/img/logo.png" />
      <Details>
        <ChannelImage src="http://localhost:5173/src/img/logo.png" alt="" />
        <div>
          <h4>Video Title</h4>
          <p>Channel Name</p>
          <p>Views</p>
        </div>
      </Details>
    </Container>
  );
}

export default Card;
