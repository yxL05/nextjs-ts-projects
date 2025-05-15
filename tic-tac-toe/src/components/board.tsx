import { JSX } from "react";
import Square from "./square";

type BoardProps = {
  className?: string;
};

export default function Board({ className = "" }: BoardProps): JSX.Element {
  const BOARDSIZE: number = 3;

  const board: React.ReactNode[] = [];
  
  for (let i = 0; i < BOARDSIZE; i++) {
    // Create 3 distinct Square objects ordered i..i+2
    const row: React.ReactNode[] = [];
    for (let j = 0; j < BOARDSIZE; j++) {
      let index = j + (BOARDSIZE*i)
      row.push(<Square key={index} index={index} />)
    }

    // Group the objects in a div and add to the board
    board.push(<div key={i} className="flex justify-center gap-2 my-2">{row}</div>)
  }

  return (
    <div className={className}>{board}</div>
  );
}
