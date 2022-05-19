import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./header";
import Home_Background from "../assets/home-background.jpg";

const Home = (props) => {
  return (
    <Container>
        <HeaderBox />
      <Content>
        <Tagline>An Ultimate Platform To Find Trending Movies</Tagline>
        <CTA>
          <Link to="/react-movie-app/movie" >
            <SignUp>Get Started</SignUp>
          </Link>
          <Description>
            Get Premier Access to our website for an additional fee
            alongwith a Disney+ subscription. As of 03/26/21, the price of our subscription will increase by $1 to provide help to the Pandemic affected families.
          </Description>
        </CTA>
        <BgImage>
          <img src={Home_Background} alt="Home_Backgroound"/>
        </BgImage>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Tagline = styled.div`
    font-size: 22px;
    color: white;
    margin-bottom: 11px;
    font-family: sans-serif;
`;

const BgImage = styled.div`
  background: linear-gradient(180deg, rgba(15,0,0,0.7), rgba(35,0,0,0.7));
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  img{
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 10px 150px;
  border: 1px solid transparent;
  border-radius: 7px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 25px 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Home;