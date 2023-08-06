import { styled } from "styled-components";
import YouTube from "react-youtube";

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
  margin: 0.5rem 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.span``;

const Buttons = styled.div``;

const Button = styled.div``;

const Recommendation = styled.div`
  flex: 2;
`;

function Video() {
  const videoId = "{jWpPHASZwRo}"; // Replace {YOUR_VIDEO_ID} with the actual YouTube video ID

  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="720"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YT Video Player."
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe> */}
          <YouTube videoId={videoId} opts={{ width: "100%", height: "720" }} />
        </VideoWrapper>
        <Title>Video Title</Title>
        <Details>
          <Info>Views</Info>
          <Buttons>
            <Button>Like</Button>
            <Button>Dislike</Button>
          </Buttons>
        </Details>
      </Content>
      <Recommendation>Recommendation.</Recommendation>
    </Container>
  );
}

export default Video;
