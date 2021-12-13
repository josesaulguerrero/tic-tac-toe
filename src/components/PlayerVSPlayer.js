// libraries and hooks
import { useContext } from "react";
// components
import { Board } from "./Board";
import { Cell } from "./Cell";
// styles
import "../assets/styles/GameMode.scss";
// context
import { GameContext } from "../context/GameContext";

export const PlayerVSPlayer = () => {
   const { gameBoard } = useContext(GameContext);
   return (
      <section className="PlayerVSPlayer">
         <Board>
            {
               gameBoard.map(({ index }) => (
                  <Cell
                     key={index}
                  />
               ))
            }
         </Board>
      </section>
   );
};
