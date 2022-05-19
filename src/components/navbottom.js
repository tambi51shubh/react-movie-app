import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Movie_Icon from "../assets/movie-icon.png";
import Tv_Icon from "../assets/tv-icon.png";

const NavBottom = () => {
    return(
        <Container>
            <Link to="/react-movie-app/movie"  >
            <Menu>
                <img src={Movie_Icon} alt="movies" />
                <span>Movies</span>
            </Menu>
            </Link>
            <Link to="/react-movie-app/tv"  >
            <Menu>
                <img src={Tv_Icon} alt="tv series" />
                <span>TV Series</span>
            </Menu>
            </Link>
        </Container>
    );
}
const Container = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: rgb(0, 0, 0, 0.9);
    z-index: 10;
`;
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 5vh;
        padding: 0 10px;
    }
    span{
        font-family: Avenir-Roman;
        font-size: 18px;
    }
`;
export default NavBottom;