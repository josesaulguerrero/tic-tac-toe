// libraries and hooks
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// components
import { App } from '@pages/App';
import { GameContextProvider } from '@context/GameContext';
// styles
import "@styles/globalStyles.scss";

ReactDOM.render(
  <StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
