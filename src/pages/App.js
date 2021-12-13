// libraries and hooks
import { useContext } from "react";
// context
import { GameContext } from "@context/GameContext";
// components
import { ConfigWindow } from "@components/ConfigWindow";
import { PlayerVSPlayer } from "@components/PlayerVSPlayer";
import { PlayerVSMachine } from "@components/PlayerVSMachine";
import { FinalScreen } from "@components/FinalScreen";
// styles
import "@styles/App.scss";

export const App = () => {
  const { gameConfig: { gameState, gameMode, gameResult } } = useContext(GameContext);
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
        (gameState === "playing" && gameMode === "playerVSmachine") &&
        <PlayerVSMachine />
      }
      {
        gameState === "finished" && <FinalScreen>{gameResult}</FinalScreen>
      }
    </div>
  );
};
