import { createContext } from "react";
import { TurnContextType, GameBoardContextType, WinContextType } from "@/types/logic";

export const TurnContext = createContext<TurnContextType | undefined>(undefined);
export const GameBoardContext = createContext<GameBoardContextType | undefined>(undefined);
export const WinContext = createContext<WinContextType | undefined>(undefined);