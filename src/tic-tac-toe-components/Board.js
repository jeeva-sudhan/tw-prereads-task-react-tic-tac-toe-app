import { useState } from "react";
import Square from "./Square";
import './Board.css'

export default function Board() {

    const [xIsNext,setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleSquareClick(index) {
  
      if(squares[index] === "X" || squares[index] === "O" || calculateWinner(squares)) {
        return;
      }
  
      const nextSquaresArr = squares.slice();
      if(xIsNext) {
        nextSquaresArr[index] = "X";
      }
      else {
        nextSquaresArr[index] = "O";
      }
      setXIsNext(!xIsNext);
      setSquares(nextSquaresArr);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if(winner === "X" || winner === "O") {
      status = `Winner is: ${winner}`;
    }
    else {
      status = `Next Player is: ${(xIsNext)?"X":"O"}`;
    }
  
    return (
      <div className="tic-tac-toe">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => {handleSquareClick(0)}} />
          <Square value={squares[1]} onSquareClick={() => {handleSquareClick(1)}} />
          <Square value={squares[2]} onSquareClick={() => {handleSquareClick(2)}} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => {handleSquareClick(3)}} />
          <Square value={squares[4]} onSquareClick={() => {handleSquareClick(4)}} />
          <Square value={squares[5]} onSquareClick={() => {handleSquareClick(5)}} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => {handleSquareClick(6)}} />
          <Square value={squares[7]} onSquareClick={() => {handleSquareClick(7)}} />
          <Square value={squares[8]} onSquareClick={() => {handleSquareClick(8)}} />
        </div>
      </div>
    );
}

function calculateWinner(squares) {
    const board = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
  
    let length = board.length;
    for(let iterator=0;iterator<length;iterator++) {
      const [a,b,c] = board[iterator];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
  