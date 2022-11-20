import { useState } from "react";
import Board from "./Components/Board";

function App() {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (id) => {
    if (checkWinner(board) || board[id]) {
      return;
    }
    board[id] = xPlaying ? "X" : "O";
    setBoard(board);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  let status;
  if (winner) {
    status = (
      <p
        className={`text-4xl ${
          winner === "X" ? "text-[#FF4625]" : "text-blue-400"
        }`}
      >{`Winer: ${winner}`}</p>
    );
  } else {
    status = (
      <p
        className={`${xPlaying ? "text-[#FF4625]" : "text-blue-500"}`}
      >{`Next player:  ${xPlaying ? "X" : "O"}`}</p>
    );
  }
  const handleRestart = () => {
    setXPlaying(true);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center gap-4 mt-[100px]">
      <h1 className="text-2xl text-blue-500">Tic Tac Toe</h1>
      <Board board={board} onClick={handleBoxClick} />
      <div>{status}</div>
      <button
        className="border-none outline-none bg-blue-400 py-[10px] px-[20px] text-white mt-6"
        onClick={() => handleRestart()}
      >
        Restart game
      </button>
    </div>
  );
}

export default App;
