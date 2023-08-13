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
  // LightModeOutlined as LightModeOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlined,
  SettingsBrightnessOutlined,
} from "@mui/icons-material";
//PropTypes for typechecking
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  ${"" /* height: 100vh; */}
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  transition: all 0.2s ease-in-out;
`;

const Wrapper = styled.div`
  padding: 1.125rem 1.625rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: bold;
  margin-bottom: 0.3rem;
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
  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 0.25rem;
  }
`;

const Hr = styled.hr`
  margin: 0.3rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

//Login
const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  line-height: 1.1;
  font-size: 0.8rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.7rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 0.25rem;
  color: #3ea6ff;
  cursor: pointer;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.675rem;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #aaaaaa;
`;

function Menu(props) {
  const { darkMode, setDarkMode } = props;
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} alt="logo" />
            MJtube
          </Logo>
        </Link>
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
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlined />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of MJtube</Title>
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
        <Item onClick={() => setDarkMode(!darkMode)}>
          {" "}
          {/* <LightModeOutlinedIcon /> */}
          <SettingsBrightnessOutlined />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
}

Menu.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Menu;
