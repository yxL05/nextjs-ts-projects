"use client"

import { useGameBoard, useTurn, useWin } from "@/contexts/useContext";
import { JSX, useState } from "react";

type SquareProps = {
  index: number;
}

export default function Square({ index }: SquareProps): JSX.Element {
  const {gameBoard, setGameBoard} = useGameBoard();

  const {turn, setTurn} = useTurn();
  const {win, setWin} = useWin();

  function handleClick(): void {
    if (win === "") {
      let tmpBoard = [...gameBoard];

      if (tmpBoard[index] === "") tmpBoard[index] = turn;
      setGameBoard(tmpBoard);
      setTurn((turn === "X") ? "O" : "X");
    }
  }

  return (
    <button 
      className={`w-8 h-8 bg-black text-white rounded transition-all 
       ${(gameBoard[index] === "" && win === "") ? "hover:border-white hover:border-2 cursor-pointer": ""}`}
      onClick={handleClick}
    >
      {gameBoard[index]}
    </button>
  );
}