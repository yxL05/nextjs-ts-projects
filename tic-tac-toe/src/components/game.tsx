"use client";

import { ReactNode, useState, useEffect } from "react";
import { TurnContext, GameBoardContext, WinContext } from "@/contexts/initContexts";
import { TurnType, GameBoardType, WinType } from "@/types/logic";

export default function Game({ children }: { children: ReactNode }) {
  const [turn, setTurn] = useState<TurnType>("X");
  const [gameBoard, setGameBoard] = useState<GameBoardType>(Array(9).fill(""));
  const [win, setWin] = useState<WinType>("");

  const WIN_CONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  useEffect(() => {
      // Draw check
      if (!gameBoard.includes("")) {
        setWin("Draw");
        return;
      }
  
      // Win check
      for (const [a, b, c] of WIN_CONS) {
        if (gameBoard[a] !== "" &&
          gameBoard[a] === gameBoard[b] &&
          gameBoard[b] === gameBoard[c]
        ) {
          setWin(gameBoard[a]);
          return;
        }
      }
  
      // Normal
      setWin("");
    }, [turn, gameBoard]
  );

  return (
    <WinContext.Provider value={{ win, setWin }}>
      <GameBoardContext.Provider value={{ gameBoard, setGameBoard }}>
        <TurnContext.Provider value={{ turn, setTurn }}>
          {children}
        </TurnContext.Provider>
      </GameBoardContext.Provider>
    </WinContext.Provider>
  );
}
