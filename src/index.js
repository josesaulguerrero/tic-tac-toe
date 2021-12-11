// libraries and hooks
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// components
import { App } from '@pages/App';
import { GameContextProvider } from '@context/GameContext';
import { MinimaxContextProvider } from '@context/MinimaxContext';
// styles
import "@styles/globalStyles.scss";

ReactDOM.render(
  <StrictMode>
    <GameContextProvider>
      <MinimaxContextProvider>
        <App />
      </MinimaxContextProvider>
    </GameContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
