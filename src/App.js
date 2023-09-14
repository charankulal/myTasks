import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import Progressbar from './Components/Progressbar';
// import Button from './Components/Button';
import React, { useState } from 'react';
import './Darkmode.css'
import './App.css';

function App() {
  
    // Use state to track the current mode (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Function to toggle between light and dark modes
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
  return (
    <>
    <div className={`row app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className={`col left ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
      <Leftsection/>
    </div>
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}  min-vh-100`} >
    
    <CenterSection/>
     
     </div>
    
    <div className={`col align-items-end right ${isDarkMode ? 'dark-mode' : 'light-mode'}  min-vh-100`}>
    
      <RightSection/>
      <p className="px-4 " >Switch Mode</p>
    <div className="toggle-theme-wrapper">
        
        
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          
          onClick={toggleDarkMode}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
      </div>

      <Progressbar/>
      
    </div>
    </div>
    
    </>
  );
}

export default App;
