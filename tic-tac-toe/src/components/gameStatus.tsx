"use client"

import { useGameBoard, useTurn } from "@/contexts/useContext";
import { StatusType } from "@/types/logic";
import { JSX, useEffect, useState } from "react";

type GameStatusProps = {
  className?: string;
}

export default ({ className = "" }: GameStatusProps): JSX.Element => {
  const [status, setStatus] = useState<StatusType>("X to move.");

  const WIN_CONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  const {turn, setTurn} = useTurn();
  const {gameBoard, setGameBoard} = useGameBoard();

  useEffect(() => {
    for (const [a, b, c] of WIN_CONS) {
      if (gameBoard[a] !== "" &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[b] === gameBoard[c]
      ) {
        setStatus(`${gameBoard[a]} wins.`);
        return;
      }
    }

    setStatus(`${turn} to move.`);
  }, [turn, gameBoard]
  );

  return (
    <p className={className}>{status}</p>
  );
};