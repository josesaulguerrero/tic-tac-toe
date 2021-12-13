// libraries and hooks
import { useContext } from "react";
// components
import { Board } from "@components/Board";
import { Cell } from "@components/Cell";
// styles
import "@styles/GameMode.scss";
// context
import { GameContext } from "@context/GameContext";

export const PlayerVSPlayer = () => {
   const {
      gameBoard,
      gameConfig: { currentPlayer },
      markCell,
      isATie,
      checkWinner,
      swapTurns,
      GameOver,
   } = useContext(GameContext);

   const onClick = (cellIndex) => {
      // the first thing to do when a cell is clicked is to mark it.
      const newBoard = markCell(cellIndex, currentPlayer);
      if (isATie(newBoard)) {
         // the game is over and the result is a tie.
         GameOver("Tie");
         return;
      }
      if (checkWinner(newBoard, currentPlayer)) {
         // the game is over and the "currentPlayer" wins.
         GameOver(`${currentPlayer} wins`);
         return;
      }
      // if it isn't a tie or no one has won, then we have to swap turns.
      swapTurns();
   };

   return (
      <section className="PlayerVSPlayer">
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
