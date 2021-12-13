// libraries and hooks
import { useContext, useState } from "react";
// context
import { GameContext } from "@context/GameContext";
// styles
import "@styles/ConfigWindow.scss";

export const ConfigWindow = () => {

   const { startGame } = useContext(GameContext);
   const [gameMode, setGameMode] = useState("playerVSplayer");

   const onSubmit = (event) => {
      event.preventDefault();
      startGame(gameMode);
   };

   const onChange = (event) => {
      setGameMode(event.target.value);
   };

   return (
      <section className="ConfigWindow">
         <form className="ConfigForm" onSubmit={onSubmit}>
            <p className="ConfigInfo">X Always goes first.</p>
            <p>Please choose a game mode</p>
            <section className="ConfigOptions">
               <label htmlFor="playerVSplayer" className="optionLabel">
                  <input
                     type="radio"
                     defaultChecked
                     name="configOption"
                     id="playerVSplayer"
                     value="playerVSplayer"
                     className="ConfigOption"
                     onChange={onChange}
                  />
                  <p className="optionText">🎮<br /> vs <br />🎮</p>
               </label>
               <label htmlFor="playerVSmachine" className="optionLabel">
                  <input
                     type="radio"
                     name="configOption"
                     id="playerVSmachine"
                     value="playerVSmachine"
                     className="ConfigOption"
                     onChange={onChange}
                  />
                  <p className="optionText">🎮<br /> vs <br />🤖</p>
               </label>
            </section>
            <input className="SubmitConfig" type="submit" value="Start Game!" />
         </form>
      </section>
   );
};
