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
      <div><Petlist/></div>
    </div>
      <h1 id='Footer'>Petlist Pro</h1>
    <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default App;
