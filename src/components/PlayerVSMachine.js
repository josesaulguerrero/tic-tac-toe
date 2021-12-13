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

   const onClick = async (cellIndex) => {
      const playerBoard = markCell(gameBoard, cellIndex, "X");
      validate(playerBoard);
      swapTurns();
      const bestMove = findBestMove(JSON.parse(JSON.stringify(playerBoard)), "O");
      const machineBoard = markCell(playerBoard, bestMove.index, "O");
      validate(machineBoard, "O");
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
