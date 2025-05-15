import { GameBoardContext, TurnContext, WinContext } from "@/contexts/initContexts";
import { GameBoardContextType, TurnContextType, WinContextType } from "@/types/logic";
import { Context, useContext } from "react";

/**
 * Creates a safe context hook that throws if used outside its provider.
 * @param context The React context to use
 * @param name Descriptive name for error messages
 */
function createContextAPI<T>(context: Context<T | undefined>, name: string) {
  return function contextAPI(): T {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error(`${name} must be used within its corresponding Provider`);
    }
    return ctx;
  };
}

export const useGameBoard = createContextAPI<GameBoardContextType>(GameBoardContext, "useGameBoard");
export const useTurn = createContextAPI<TurnContextType>(TurnContext, "useTurn");
export const useWin = createContextAPI<WinContextType>(WinContext, "useWin");