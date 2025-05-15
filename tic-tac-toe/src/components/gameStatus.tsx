"use client"

import { useGameBoard, useTurn, useWin } from "@/contexts/useContext";
import { StatusType } from "@/types/logic";
import { JSX, useEffect, useState } from "react";

type GameStatusProps = {
  className?: string;
}

export default ({ className = "" }: GameStatusProps): JSX.Element => {
  const [status, setStatus] = useState<StatusType>("X to move.");
  const {win, setWin} = useWin();
  const {turn, setTurn} = useTurn();

  useEffect(() => {
    switch (win) {
      case "X":
        setStatus("X wins.");
        break;
      case "O":
        setStatus("O wins.");
        break;
      case "Draw":
        setStatus("Draw.");
        break;
      default:
        setStatus(`${turn} to move.`);
        break;
    }
  }, [win, turn]
  );

  return (
    <p className={className}>{status}</p>
  );
};