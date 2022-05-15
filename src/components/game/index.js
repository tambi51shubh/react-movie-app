import React, {useState} from "react";
import Square from "./square";

const Game = (props) => {
    const [valueArr, setValueArr] = useState(new Array(9).fill(""));
    const [currentTurn, setCurrentTurn] = useState("0");
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if(valueArr[index] !== "" || winner !== null){
            return;
        }
        const newArr = [...valueArr];
        newArr[index] = currentTurn;
        setValueArr(newArr);
        if (isWinner(newArr)){
            console.log("calling isWinner");
            return;
        }
        setCurrentTurn(getCurrentTurn())    
    }
    const isWinner = (newArr) => {
        console.log("inside isWinner");
        const winnigCombinations = [[0,4,8], [0,3,6], [1,4,7], [0,1,2], [3,4,5], [6,7,8], [2,4,6], [2,5,8]];
        for ( let winningCombination of winnigCombinations){
            console.log("inside for loop", newArr[winningCombination[0]],newArr[winningCombination[1]],newArr[winningCombination[2]], currentTurn);
            if (newArr[winningCombination[0]] === currentTurn && newArr[winningCombination[1]] === currentTurn && newArr[winningCombination[2]] === currentTurn ){
                console.log("inside if condition");
                setWinner(currentTurn);
                return true;
            }
        } 
        return false;

    }
    const getCurrentTurn = () => currentTurn === "0" ? "X" : "0";
    
    return (
        <>
        <div>{winner && "You Won"}</div>
        <div className="game-board">
            {valueArr.map((v, index) => <Square key = {index} value = {v} handleClick = {handleClick} index = {index}/>)}
        </div>        
        </>
        
    )
    
}

export default Game;