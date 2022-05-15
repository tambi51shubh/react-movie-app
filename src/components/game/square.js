import React from "react";

const Square = (props) => {
    return (
        <div className="square" onClick={() => props.handleClick(props.index)} >{props.value}</div>
    );
}

export default Square;




//WInning combinations : [0,4,8] [0,3,6] [1,4,7] [0,1,2] [3,4,5] [6,7,8] [2,4,6] [2,5,8] 