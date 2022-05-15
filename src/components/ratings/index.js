import React from "react";
import styled from "styled-components";
import Icon from "../icons";

const Rating = ({max=10, ratingValue, width, height, ...props}) => {
    const ratingInteger = Math.round(ratingValue);
    return (
        <Container {...props}>
          {  
              new Array(max).fill("").map((value, index) => <StyledStar name="Star" width="18" height="18" selected={ratingInteger > index} key={index}/> )
          }
        </Container>
    );
}

const Container = styled.p`
    display: inline-block;
`;

const StyledStar = styled(Icon)`
    path {
        fill: ${(props) => props.selected ? "goldenrod" : "grey"};
    }
`;

export default Rating;

//<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>