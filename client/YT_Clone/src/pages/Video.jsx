import { styled } from "styled-components";
// import YouTube from "react-youtube";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
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

const Hr = styled.hr`
  margin: 0.5rem 0;
  /* border: none; */
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  justify-content: space-between;
  gap: 0.5rem;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  /* color: ${({ theme }) => theme.textSoft};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem; */
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  color: #fff;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 0.5rem;
  height: 3rem;
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

function Video() {
  // const videoId = "{jWpPHASZwRo}"; // Replace {YOUR_VIDEO_ID} with the actual YouTube video ID

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://youtu.be/VAdIUI7AIgU"
            title="YT Video Player."
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          {/* <YouTube videoId={videoId} opts={{ width: "100%", height: "720" }} /> */}
        </VideoWrapper>
        <Title>Video Title</Title>
        <Details>
          <Info>123456 Views</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://rb.gy/3ptza" />
            {/* Bugatti Chiron link shortened */}
            <ChannelDetails>
              <ChannelName>Channel Name</ChannelName>
              <ChannelCounter>123K Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quia, quos voluptates voluptatibus
                voluptatem quod quae quidem doloribus natus. Quisquam, quia
                voluptates. Quisquam, quia voluptates.
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
      </Content>
      <Recommendation>Recommendation.</Recommendation>
    </Container>
  );
}

export default Video;
