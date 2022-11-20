import React from "react";
import Box from "./Box";

const Board = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-[repeat(3,6rem)]  place-items-center justify-center">
      {board.map((box, index) => {
        return <Box key={index} value={box} onClick={() => onClick(index)} />;
      })}
    </div>
  );
};

export default Board;
