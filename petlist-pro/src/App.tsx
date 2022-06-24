import React from 'react';
import './App.css';
import Petlist from './components/PetList';
import Petoverview from './components/PetSummary';
function App() {
  return (
    <div>
    <div className="petlistPro">
      
      <div><Petlist/></div>
    </div>
      <h1 id='Footer'>Petlist Pro</h1>
    </div>
  );
}

export default App;
