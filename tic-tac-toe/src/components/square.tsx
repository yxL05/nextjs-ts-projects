"use client"

import { useGameBoard, useTurn } from "@/contexts/useContext";
import { JSX, useState } from "react";

type SquareProps = {
  index: number;
}

export default function Square({ index }: SquareProps): JSX.Element {
  const {gameBoard, setGameBoard} = useGameBoard();

  const {turn, setTurn} = useTurn();

  function handleClick(): void {
    let tmpBoard = [...gameBoard];

    if (tmpBoard[index] === "") tmpBoard[index] = turn;
    setGameBoard(tmpBoard);
    setTurn((turn === "X") ? "O" : "X");
  }

  return (
    <button 
      className={`w-8 h-8 bg-black text-white rounded transition-all 
       ${gameBoard[index] === "" ? "hover:border-white hover:border-2 cursor-pointer": ""}`}
      onClick={handleClick}
    >
      {gameBoard[index]}
    </button>
  );
}