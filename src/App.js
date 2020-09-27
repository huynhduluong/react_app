import React from 'react';
import './App.css';
import StateLessComponent from './components/StateLessComponent';
import StateFull, { StateFullComponent } from './components/StateFullComponent';

function App() {
  return (
    <div>
      <StateLessComponent />
      <StateFullComponent />
      <StateFull />
    </div>
  );
}

export default App;
