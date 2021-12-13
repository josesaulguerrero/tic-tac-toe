// libraries and hooks
import { useContext } from "react";
// styles
import "../assets/styles/Board.scss";
// context
import { GameContext } from "../context/GameContext";

export const Board = ({ children }) => {
   const { gameConfig: { currentPlayer } } = useContext(GameContext);
   return (
      <section className="Board">
         <h2 className="playerInfo">It's {currentPlayer}'s turns</h2>
         <article className="Cells">
            {children}
         </article>
      </section>
   );
};
