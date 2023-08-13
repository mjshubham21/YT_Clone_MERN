import { styled } from "styled-components";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding: 2rem; */
`;

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/videos/random");
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <Card
          key={video._id}
          title={video.title}
          thumbnail={video.thumbnail}
          channel={video.channel}
          views={video.views}
          createdAt={video.createdAt}
        />
      ))}
    </Container>
  );
}

export default Home;
