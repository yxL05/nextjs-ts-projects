import { useGameBoard, useTurn, useWin } from "@/contexts/useContext";
import { JSX } from "react";

type ResetProps = {
  className?: string;
}

export default ({ className = "" }: ResetProps): JSX.Element => {
  const {gameBoard, setGameBoard} = useGameBoard();
  const {turn, setTurn} = useTurn();
  const {win, setWin} = useWin();

  function handleClick(): void {
    setGameBoard(Array(9).fill(""));
    setTurn("X");
    setWin("");
  }

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      Reset
    </button>
  );
}