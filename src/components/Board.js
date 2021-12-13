// libraries and hooks
import { useContext } from "react";
// styles
import "@styles/Board.scss";
// context
import { GameContext } from "@context/GameContext";

export const Board = ({ children, className }) => {
   const { gameConfig: { currentPlayer } } = useContext(GameContext);
   return (
      <section className="Board">
         <h2 className="playerInfo">It's {currentPlayer}'s turns</h2>
         <article className={`Cells ${className}`}>
            {children}
         </article>
      </section>
   );
};
