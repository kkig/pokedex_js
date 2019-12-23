import React from 'react';
import './App.css';

import AppHeader from './containers/AppHeader';
import AppBody from './containers/AppBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <main className="main-container">
        <AppBody /> 
      </main>
    </div>
  );
}

export default App;
