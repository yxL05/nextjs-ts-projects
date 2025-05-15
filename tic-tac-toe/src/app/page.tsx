"use client"

import { JSX, createContext, useState } from "react";
import Board from "../components/board";
import GameStatus from "../components/gameStatus";
import Reset from "../components/reset";
import { TurnType, TurnContextType, GameBoardContextType, GameBoardType } from "@/types/logic";

import { TurnContext } from "@/contexts/initContexts";
import { GameBoardContext } from "@/contexts/initContexts";

export default (): JSX.Element => {
  const [turn, setTurn] = useState<TurnType>("X"); 
  const [gameBoard, setGameBoard] = useState<GameBoardType>(Array(9).fill(""));

  return (
    <GameBoardContext.Provider value={{gameBoard, setGameBoard}}>
      <TurnContext.Provider value={{turn, setTurn}}>
        <h1 className="text-center text-3xl font-bold my-8">Tic-Tac-Toe</h1>
        <Board className="my-4" />
        <GameStatus className="text-center" />
        <Reset 
          className="mx-auto my-4
          bg-black px-4 py-1 block 
          cursor-pointer hover:opacity-75 transition-all" 
        />
      </TurnContext.Provider>
    </GameBoardContext.Provider>
  );
};