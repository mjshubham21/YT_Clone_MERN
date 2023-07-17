import styled from "styled-components";
import logo from "../img/logo.png";
//Material UI Icons
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  LibraryMusic as LibraryMusicIcon,
  SportsBasketball as SportsBasketballIcon,
  SportsEsports as SportsEsportsIcon,
  MovieCreation as MovieCreationIcon,
  Flag as FlagIcon,
  HelpOutline as HelpOutlineIcon,
  LightModeOutlined as LightModeOutlinedIcon,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 0.875rem;
`;

const Wrapper = styled.div`
  padding: 1.125rem 1.625rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  width: 2.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} alt="logo" />
          MJtube
        </Logo>
        <Item>
          {" "}
          <HomeIcon />
          Home
        </Item>
        <Item>
          {" "}
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          {" "}
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Item>
          {" "}
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          {" "}
          <HistoryIcon />
          History
        </Item>
        <Item>
          {" "}
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          {" "}
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          {" "}
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          {" "}
          <MovieCreationIcon />
          Movies
        </Item>
        <Item>
          {" "}
          <VideoLibraryIcon />
          News
        </Item>
        <Item>
          {" "}
          <HistoryIcon />
          Live
        </Item>
        <Item>
          {" "}
          <LibraryMusicIcon />
          Settings
        </Item>
        <Item>
          {" "}
          <FlagIcon />
          Report
        </Item>
        <Item>
          {" "}
          <HelpOutlineIcon />
          Help
        </Item>
        <Item>
          {" "}
          <LightModeOutlinedIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;
