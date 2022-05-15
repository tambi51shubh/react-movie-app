//Detail
import React from "react";
import { Link, useParams } from "react-router-dom";
import { IMAGE_PATH_BACKGROUND } from "../constants";
import Rating from "./ratings/index"
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useFetchDetail } from "../hooks";

import Play_Icon from "../assets/play-icon-black.png"
import Back_Icon from "../assets/back.png"
import A_Icon from "../assets/a-icon.png"
import U_Icon from "../assets/u-icon.png"


const Detail = () => {
  window.scroll(0, 0);
  const {mediaType, mediaId} = useParams();
  const {media, trailer, credits} = useFetchDetail(mediaType, mediaId);
  const castDetails = [];
  credits.cast && credits.cast.map((credit) => castDetails.push(credit.name));
  console.log(castDetails);
  
  if (!media ) return null;  
  return(
    <>
      <Container>
        <Background>
          <ReactPlayer 
            url={trailer}
            playing={true}
            muted={false}
            controls={true}
            light={IMAGE_PATH_BACKGROUND + media.backdrop_path}
            width={1440}
            height={600}  
          /> 
        </Background>
        <ImageTitle>
          <h1>{media.title || media.name}</h1>
        </ImageTitle>
        <ContentMeta>
          <Controls>
            <a href={media.homepage} target="_blank"  rel="noreferrer">
              <Player>
                <img src={Play_Icon} alt="" />
                <span>{`Watch ${mediaType === "movie" ? "Movie" : "TV Series" }`}</span>
              </Player>
            </a>
            <Link to={mediaType === "movie" ? "/react-movie-app/movie" : "/react-movie-app/tv"}>
              <Back>
                <img src={Back_Icon} alt="" />
                <span>Back</span>
              </Back>
            </Link>
              <Info>
                {media.adult  ? <img src={A_Icon} alt="A-certified"/> : <img src={U_Icon} alt="U-certified"/>}
              </Info>
              <Info>
                <h3>{(media.release_date && media.release_date.slice(0, 4)) || ( media.first_air_date && media.first_air_date.slice(0, 4))}</h3>
              </Info>
              <Info>
                {media.number_of_seasons ? <h3>{media.number_of_seasons === 1 ? `${media.number_of_seasons} Season` : `${media.number_of_seasons} Seasons`}</h3> : <h3>{media.status}</h3> }
              </Info>
          <Cast>
            {credits.crew && 
              <h4>Created by : {credits.crew.slice(0, 4).map((credit) => (credit.known_for_department === "Directing" || credit.known_for_department === "Writing") && credit.name + ", " )} </h4>
            } 
            {media.genres &&
              <h4>Genres : {media.genres.map((genre) => genre.name + ", ")} </h4>
            } 
            {castDetails &&
              <h4>Cast : {castDetails.slice(0, 4).join(", ")} </h4>
            } 
          </Cast>
          </Controls>
          <SubTitle>{media.tagline}</SubTitle>
          <Description>{media.overview}</Description>
          <Rating ratingValue = {media.vote_average / 2} max = {5} width={24} height={24} />
        </ContentMeta>
      </Container>
    </>
   
  );

}
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 65px;
  padding: 0 35px;
`;
 
const Background = styled.div`
  left: 0px;
  opacity: 0.7;
  position: absolute;
  right: 0px;
  top: -60px;
  @media (max-width: 768px) {
    width: initial;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 35vw;
  min-height: 170px;
  width: 100%;
  margin-top: 100px;
  h1 {
    /* max-width: 600px;
    min-width: 200px;
    width: 25vw; */
  }
`;

const ContentMeta = styled.div`
  max-width: max-content;
`;

const Controls = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 0.3fr 0.3fr 0.8fr 3.5fr;
  min-height: 56px;
  /* padding-bottom: 20px; */
`;

const Back = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Player = styled(Back)`
a{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  &:hover {
    background: rgb(198, 198, 198);
}
}
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px 5px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
}
  img{
    background-color: rgb(0, 0, 0, 0.6);
    width: 4vmin;
  }
`;
const Cast = styled.div`
  background-color: rgb(20, 20, 20 ,0.7);
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  justify-content: center;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 15px;
  h4{
    height: 10px;
  }

`;

export default Detail;
