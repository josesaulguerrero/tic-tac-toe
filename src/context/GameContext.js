import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {

   const createCell = (index) => ({
      index,
      isMarked: false,
      markedBy: null
   });

   const [gameConfig, setGameConfig] = useState({
      currentPlayer: "X",
      gameMode: null,
      gameState: "no_set_up",
      gameResult: null
   });

   const [gameBoard, setGameBoard] = useState([
      createCell(0), createCell(1), createCell(2),
      createCell(3), createCell(4), createCell(5),
      createCell(6), createCell(7), createCell(8),
   ]);

   const startGame = (gameMode) => {
      setGameConfig(prevState => ({
         ...prevState,
         currentPlayer: "X",
         gameMode: gameMode,
         gameState: "playing",
         gameResult: null
      }));
   };

   const markCell = (cellIndex, playerMark) => {
      setGameBoard(prevState => {
         const newState = prevState.map(cell => {
            return cell.index === cellIndex
               ? { ...cell, isMarked: true, markedBy: playerMark }
               : cell;
         });
         return newState;
      });
   };

   const findEmptyCells = () => {
      return gameBoard.filter(({ isMarked }) => isMarked === false);
   };

   const checkWinner = (board, playerMark) => {
      const winCombinations = [
         [0, 1, 2],
         [0, 4, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [2, 4, 6],
         [3, 4, 5],
         [6, 7, 8],
      ];

      return winCombinations.some((combination) => {
         return combination.every((cellNumber) => {
            return board[cellNumber].markedBy === playerMark;
         });
      });
   };

   const isATie = () => {
      return gameBoard.every(({ isMarked }) => isMarked === true);
   };

   const swapTurns = () => {
      setGameConfig(prevState => ({
         ...prevState,
         currentPlayer: prevState.currentPlayer === "X"
            ? "O"
            : "X"
      }));
   };

   const GameOver = (gameResult) => {
      setGameConfig(prevState => ({
         ...prevState,
         gameState: "finished",
         gameResult: gameResult
      }));
   };

   const resetMatch = () => {
      // free the cells
      // go back to the game board
   };

   const resetGame = () => {
      //free the cells
      // delete all the previous config
      // come back to the config window
   };

   const gameUtilities = {
      gameBoard,
      gameConfig,
      startGame,
      markCell,
      isATie,
      checkWinner,
      swapTurns,
      GameOver,
      findEmptyCells,
   };

   return (
      <GameContext.Provider value={gameUtilities}>
         {children}
      </GameContext.Provider>
   );
};