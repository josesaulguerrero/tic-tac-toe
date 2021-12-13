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
   const { gameBoard, gameConfig: { currentPlayer }, markCell, isATie, checkWinner, swapTurns } = useContext(GameContext);

   const onClick = (cellIndex) => {
      // the first thing to do when a cell is clicked is to mark it.
      const newBoard = markCell(cellIndex, currentPlayer);
      if (isATie(newBoard)) {
         console.log("tie");
      }

      if (checkWinner(newBoard, currentPlayer)) {
         console.log(`${currentPlayer} wins`);
      }

      swapTurns();
   };

   return (
      <section className="PlayerVSPlayer">
         <Board>
            {
               gameBoard.map(({ index }) => (
                  <Cell
                     key={index}
                     index={index}
                     onClick={onClick}
                  />
               ))
            }
         </Board>
      </section>
   );
};
