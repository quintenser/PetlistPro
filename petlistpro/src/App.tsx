import { url } from 'inspector';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Petlist from './components/PetList';
import Petoverview from './components/PetSummary';

function App() {
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="background" data-theme={theme}>
    <div className="petlistPro" data-theme={theme}>
      <button className='modeSwitch' onClick={switchTheme}>{theme === 'light' ? '🌚' : '☀️'}</button>
      <div><Petlist/></div>
      <div className='header'><h2 className='messageBox'></h2></div>
    </div>
    <div className='footer'>
      <h1 id='Footer'>Petlist Pro</h1>
      </div>
    </div>
  );
}

export default App;
