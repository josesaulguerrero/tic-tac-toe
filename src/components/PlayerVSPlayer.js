// components
import { Board } from "./Board";
// styles
import "../assets/styles/GameMode.scss";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const PlayerVSPlayer = () => {
   const { gameBoard } = useContext(GameContext);
   return (
      <section className="PlayerVSPlayer">
         <Board>
            {
               gameBoard.map(console.log)
            }
         </Board>
      </section>
   );
};
