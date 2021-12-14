// libraries and hooks
import { useContext } from "react";
// components
import { Board } from "@components/Board";
import { Cell } from "@components/Cell";
// styles
import "@styles/GameMode.scss";
// context
import { GameContext } from "@context/GameContext";
import { MinimaxContext } from "@context/MinimaxContext";

export const PlayerVSMachine = () => {
   const {
      gameBoard,
      gameConfig: { currentPlayer },
      markCell,
      isATie,
      checkWinner,
      swapTurns,
      GameOver,
   } = useContext(GameContext);

   const { findBestMove } = useContext(MinimaxContext);

   const validate = (board, player) => {
      if (isATie(board)) {
         // the game is over and the result is a tie.
         GameOver("It's a tie 😕");
      }
      if (checkWinner(board, player)) {
         // the game is over and the "currentPlayer" wins.
         GameOver(`${player} wins 😎`);
      }
   };

   const onClick = (cellIndex) => {
      // the first thing to do is to mark the cell with the given index.
      const playerBoard = markCell(gameBoard, cellIndex, "X");
      // then validate if it's a game over.
      validate(playerBoard);
      // the turns are swapped
      swapTurns();
      // we call the minimax algorithm to find the best move.
      const bestMove = findBestMove(JSON.parse(JSON.stringify(playerBoard)), "O");
      // we mark the cell with the returned index by the algorithm.
      const machineBoard = markCell(playerBoard, bestMove.index, "O");
      // again we validate whether it's a game over.
      validate(machineBoard, "O");
      // and the turns are swapped again.
      swapTurns();
   };

   return (
      <section className="PlayerVSMachine">
         <Board className={currentPlayer}>
            {
               gameBoard.map(({ index, isMarked, markedBy }) => (
                  <Cell
                     key={index}
                     index={index}
                     onClick={isMarked ? () => { return; } : onClick}
                     markedBy={markedBy}
                  />
               ))
            }
         </Board>
      </section>
   );
};
