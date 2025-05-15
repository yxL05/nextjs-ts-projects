export type TurnType = "X" | "O";

export type TurnContextType = {
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
}

export type ValueType = TurnType | "";

export type GameBoardType = ValueType[];

export type GameBoardContextType = {
  gameBoard: GameBoardType;
  setGameBoard: React.Dispatch<React.SetStateAction<GameBoardType>>;
}

export type StatusType = `${TurnType} to move.` | `${TurnType} wins.` | "Draw."