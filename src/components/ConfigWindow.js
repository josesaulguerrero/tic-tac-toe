// styles
import "@styles/ConfigWindow.scss";

export const ConfigWindow = () => {
   return (
      <section className="ConfigWindow">
         <form className="ConfigForm">
            <p className="ConfigInfo">X Always goes first.</p>
            <section className="ConfigOptions">
               <p>Please choose a game mode</p>
               <input type="radio" checked name="configOption" id="playerVSplayer" value="playerVSplayer" className="ConfigOption" />
               <input type="radio" name="configOption" id="playerVSmachine" value="playerVSmachine" className="ConfigOption" />
            </section>
            <input type="submit" value="Start Game!" />
         </form>
      </section>
   );
};
