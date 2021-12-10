import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@pages/App';
import { GameContextProvider } from '@context/GameContext';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
