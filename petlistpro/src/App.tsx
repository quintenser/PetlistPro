import { url } from 'inspector';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Petlist from './components/PetList';
import Petoverview from './components/PetSummary';

function App() {
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [status, setStatus] = useLocalStorage('status', defaultDark ? '750s' : '0s');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  const switchAnimation = () => {
    const newStatus = status === '750s' ? '0s' : '750s';
    setStatus(newStatus)
    document.documentElement.style.setProperty('--speed', newStatus);
  }
  return (
    <div className="background" data-theme={theme}>
    <div className="petlistPro" data-theme={theme}>
      <button className='modeSwitch' onClick={switchTheme}>{theme === 'light' ? '🌚' : '☀️'}</button>
      <button id='animationToggle' className='modeSwitch' onClick={switchAnimation}>{status === '0s' ? '⏯️' : '⏸️'}</button>
      <div><Petlist/></div>
    </div>
    <div className='footer'>
      <h1 id='Footer'>Petlist Pro</h1>
      </div>
    </div>
  );
}

export default App;
