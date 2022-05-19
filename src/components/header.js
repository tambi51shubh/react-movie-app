import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo_Company from "../assets/logo.svg";
import Home_Icon from "../assets/home-icon.svg";
import Search_Icon from "../assets/search-icon.svg"

const HeaderBox = () => {
    return (
        <Nav>
            <Logo>
            <img src={Logo_Company} alt="Logo"/>
            </Logo>
            <Website> CINEPOLLS </Website>
            <NavMenu>
              <Link to="/react-movie-app">
            <a>
              <img src={Home_Icon} alt="Home Icon"/>
              <span>HOME</span>
            </a>
              </Link>
            <a>
              <img src={Search_Icon} alt="Search Icon"/>
              <span>SEARCH</span>
            </a>
            
            </NavMenu>
            
        </Nav>

    );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgb(1, 1, 1, 0.9);
  display: grid;
  grid-template-columns: 1fr 8fr 1fr ;
  align-items: center;
  padding: 0 36px;
  z-index: 10;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: auto;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 80px;
    height: 50px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 5px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
const Website = styled.div`
    display: flex;
    justify-content: flex-start;
    color: rgb(249, 249, 249);
    letter-spacing: 15px;
    
`;
export default HeaderBox;