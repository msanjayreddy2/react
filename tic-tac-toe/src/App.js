import React, { useState, useEffect } from "react";
import "./App.css";
import Btn from "./Btn";

function App() {
  const [board, setBoard] = useState(Array(9).fill("."));
  const [cnt, setcnt] = useState(0);
  // const [res, setres] = useState(".");
  // const [x_cnt, setx_cnt] = useState(0);
  // const [o_cnt, seto_cnt] = useState(0);
  const [winner, setWinner] = useState("tic-tac-toe");
  useEffect(() => {
    const result = Getres(board);
    if (result === "X" || result === "O") {
      setWinner(`Player ${result} wins!`);
    } else if (result === "tie") {
      setWinner("It's a tie!");
    } else {
      setWinner("tic-tac-toe");
    }
  }, [board]);

  function AddStep(indx) {
    if (board[indx] !== "." || winner !== "tic-tac-toe") {
      return;
    }

    const tmp = board.map((value, index) => {
      if (index === indx) {
        setcnt(cnt + 1);
        if (cnt % 2 === 0) {
          return "O";
        }
        return "X";
      }
      return value;
    });
    setBoard(tmp);
    // setres(Getres());
  }
  function Getres() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes(".")) {
      console.log(board);

      return "tie";
    }

    return "tic-tac-toe";
  }
  function handleclick() {
    setBoard(Array(9).fill("."));
    setWinner("tic-tac-toe");
  }
  return (
    <div className="main_1">
      <div className="result">{winner}</div>

      <div className="App">
        <div className="main">
          <div className="inner">
            {board.map((value, indx) => {
              return (
                <Btn key={indx} indx={indx} value={value} func={AddStep}></Btn>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-danger" onClick={handleclick}>
          clear
        </button>
      </div>
    </div>
  );
}

export default App;
