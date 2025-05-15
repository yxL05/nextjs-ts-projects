import { createContext } from "react";
import { TurnContextType, GameBoardContextType } from "@/types/logic";

export const TurnContext = createContext<TurnContextType | undefined>(undefined);
export const GameBoardContext = createContext<GameBoardContextType | undefined>(undefined);
