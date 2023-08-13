import { Link } from "react-router-dom";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Container = Styled.div`
  width: ${(props) => props.type !== "sm" && "22.5rem"};
  margin-bottom: ${(props) => (props.type === "sm" ? "0.625rem" : "2.813rem")};
  background-color: ${({ theme }) => theme.bg};
   color: ${({ theme }) => theme.text};
   border-radius: 0.5rem;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   display: ${(props) => props.type === "sm" && "flex"};
   gap: 0.625rem;
`;

const Image = Styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "7.5rem" : "12.625rem")};
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #999;
    object-fit: cover;
    flex: 1;
`;

const Details = Styled.div`
    padding: 0.5rem;
    margin-top: ${(props) => props.type !== "sm" && "1rem"};
    display: flex;
    gap: 0.5rem;
    flex: 1;
`;

const ChannelImage = Styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
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

function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="http://localhost:5173/src/img/logo.png" />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="http://localhost:5173/src/img/logo.png"
            alt=""
          />
          <Texts>
            <Title>Video Title</Title>
            <ChannelName>Channel Name</ChannelName>
            <Info>123456 Views * 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

Card.propTypes = {
  type: PropTypes.string.isRequired, // Define type as a required string prop
};

export default Card;
