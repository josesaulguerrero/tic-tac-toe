// libraries and hooks
import { useContext } from "react";
// context
import { GameContext } from "@context/GameContext";
// components
import { ConfigWindow } from "@components/ConfigWindow";
// styles
import "@styles/App.scss";

export const App = () => {
  const { gameConfig: { gameState } } = useContext(GameContext);
  return (
    <div className="App">
      {
        gameState === "no_set_up" && <ConfigWindow />
      }
    </div>
  );
};
