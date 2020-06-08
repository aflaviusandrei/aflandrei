import React from 'react';
import MainScreen from './compoments/MainScreen/MainScreen';
import Canvas from './compoments/Canvas/Canvas';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Canvas />
      <MainScreen />
    </div>
  );
}

export default App;
