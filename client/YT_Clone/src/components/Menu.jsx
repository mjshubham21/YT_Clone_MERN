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
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  AccountCircleOutlined,
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
  ${"" /* margin-bottom: 0.5rem; */}
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 1rem 0;
  border: 0.5px solid #373737;
`;

//Login
const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.5;
  font-size: 0.75rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 0.25rem;
  color: #3ea6ff;
  cursor: pointer;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
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
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Login>
        <Hr />
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
        <Hr />
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
        <Hr />
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
