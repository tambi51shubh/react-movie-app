import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../constants";
import NavBottom from "./navbottom";
import { useFetchList } from "../hooks";
import Rating from "./ratings";

const Trending = (props) => {
  const movieData = useFetchList("movie");
  const tvData = useFetchList("tv");
  console.log(movieData.list);

  const handleButton = () => {
    (props.type === "movie" ? movieData.loadMore() : tvData.loadMore()) 
  }
  return (
    <>
      <Container >
        <h1>{`Trending ${props.title}`}</h1>           
        <Content>
          {(props.type === "movie" ? movieData.list : tvData.list) &&
          (props.type === "movie" ? movieData.list : tvData.list).map((media) => (
            <>
              <Wrap key={media.id}>
                <Link to={`/detail/${props.type}/${media.id}`} >
                  <Image bgUrl = {IMAGE_PATH + media.backdrop_path} />
                  <ImgCard >
                    <Title>
                      {media.title || media.name}
                    <Rating ratingValue = {media.vote_average / 2} max = {5} width={12} height={12} />
                    </Title>
       
                  </ImgCard>      
                </Link>
              </Wrap>
            </>
          ))}
        </Content>
        <Load onClick={handleButton} >Load More....</Load>
      </Container>
      <NavBottom />
    </>
  );

}

const Container = styled.div`
   position: relative;
   top: 10vmin;
   padding: 20px 0 90px 0;
   margin: 0, auto;
 
   h1{
     padding-left: 40px;
     text-align: left;
     /* font-size: 25px; */
     cursor: pointer;
   }
   `; 
   
const Content = styled.div`
   display: grid;
   row-gap: 15px;
   column-gap: 10px;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   @media (min-width: 850px) and (max-width: 1000px){
     grid-template-columns: repeat(6, minmax(0, 1fr));
   }
   @media (min-width: 700px) and (max-width: 849px) {
     grid-template-columns: repeat(5, minmax(0, 1fr));
   }
   @media (min-width: 550px) and (max-width: 699px) {
     grid-template-columns: repeat(4, minmax(0, 1fr));
   }
   @media (min-width: 400px) and (max-width: 549px) {
     grid-template-columns: repeat(3, minmax(0, 1fr));
   }
   @media (max-width: 399px) {
     grid-template-columns: repeat(1, minmax(0, 1fr));
   }
   `;

const ImgCard = styled.div`
    background-color: #001520
    height: 10vmin;
    padding: 10px;
   `;

const Wrap = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   flex-wrap: nowrap;
   height: 30vmin;
   border-radius: 10px;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   cursor: pointer;
   overflow: hidden;
   position: relative;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   border: 3px solid rgba(249, 249, 249, 0.1);
   &:hover {
       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
       transform: scale(1.05);
       border-color: rgba(249, 249, 249, 0.8);
   }
   `;

const Image = styled.div`
   inset: 0px;
   display: block;
   height: 20vmin;
   background-image: url(${props => props.bgUrl});
   background-size: cover;
   transition: opacity 500ms ease-in-out 0s;

   `;
const Title = styled.span`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
    letter-spacing: 1.8px;
    line-height: 1.2;
    font-size: 1.1vw;

    `;

const Load = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 60px;
  text-align: center;
  background-color: green;
  font-size: 20px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   background-color: #153d60;
  color: #f9f9f9;
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    /* border-color: rgba(249, 249, 249, 0.8); */
  }
`;
   
export default Trending;