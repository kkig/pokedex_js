import React from 'react';
import './App.css';

import AppHeader from './containers/AppHeader';
import AppBody from './containers/AppBody';

import StoreProvider from './stores/PokeStore';

function App() {
  return (
    <div className="App">
        <StoreProvider>
        <header className="App-header">
          <AppHeader />
        </header>
        <main className="main-container">
          <AppBody /> 
        </main>
      </StoreProvider>
    </div>
  );
}

export default App;
