import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#">
          <img src="/images/Ad1.jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src="/images/Ad2.jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src="/images/Ad3.jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src="/images/Ad4.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/Ad5.jpeg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  
  margin-top: 75px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.1s ease-out 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer; 
  a {
      cursor: pointer;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      img {
        width: 90%;
        border-radius: 20px;
      object-fit: contain;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImageSlider;

