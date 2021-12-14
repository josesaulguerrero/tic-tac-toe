// libraries and hooks
import { useContext } from "react";
// components
import { Button } from "./Button";
// context
import { GameContext } from "../context/GameContext";
// styles
import "@styles/FinalScreen.scss";

export const FinalScreen = ({ children }) => {
   const { resetMatch, resetGame, gameConfig: { gameMode } } = useContext(GameContext);

   return (
      <section className="FinalScreen">
         <section className="FinalScreenOptions">
            <h2 className="GameResult" >{children}</h2>
            <Button onClick={() => resetMatch(gameMode)} >Restart Match</Button>
            <Button onClick={resetGame} >Reset Game</Button>
         </section>
      </section>
   );
};
