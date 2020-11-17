import React from 'react';
import './App.css';
import Statement from './Statement'
import {yes, no} from './objects'


function App() {
  return <Statement 
    yesStatement = {yes["yes-statement"]}
    noStatement = {no["no-statement"]}
    yesImage = {yes["yes-image"]}
    noImage = {no["no-image"]}
  />
}

export default App;
