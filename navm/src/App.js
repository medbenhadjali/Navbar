import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navm from './Navm';
const nav =[{menu:"Home"},{menu:"Services",sub:["For entrepreneur","For students","For hobbyists"]},{menu:"Contact"}];

function App() {
  return (
    <div className="App">
     <Navm navmenu={nav} />
    </div>
  );
}

export default App;
