import React, { Component } from 'react';
import './App.css';
import Tehnologies from './Tehnologies';
import Header from './Header';

const App = () => {
  return (
    <div >
      <Header />
      <h1 className="App">ArtKDev</h1>
      <Tehnologies />
    </div>
  );
}

export default App;
