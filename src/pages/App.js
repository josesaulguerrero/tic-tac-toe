// libraries and hooks
import { useContext } from "react";
// context
import { GameContext } from "@context/GameContext";
// components
import { ConfigWindow } from "@components/ConfigWindow";
import { PlayerVSPlayer } from "@components/PlayerVSPlayer";
// styles
import "@styles/App.scss";

export const App = () => {
  const { gameConfig: { gameState, gameMode } } = useContext(GameContext);
  return (
    <div className="App">
      {
        gameState === "no_set_up" && <ConfigWindow />
      }
      {
        (gameState === "playing" && gameMode === "playerVSplayer") &&
        <PlayerVSPlayer />
      }
      {
        (gameState === "playing" && gameMode === "playerVSmachine") && <p>player vs machine</p>
      }
    </div>
  );
};
