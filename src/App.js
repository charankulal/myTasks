import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import CenterSection from './Components/CenterSection';
import Leftsection from './Components/Leftsection';
import Progressbar from './Components/Progressbar';
import RightSection from './Components/RightSection';
import NotesState from './Context/NotesState';
import './Darkmode.css';


function App() {


    // Use state to track the current mode (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Function to toggle between light and dark modes
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };


    
  
  return (
    <NotesState>
    
    <div className={`row app ${isDarkMode ? 'dark-mode' : 'light-mode'} min-vh-100`} style={{
                    width: '100%', height: '100%',
                    overflowX: 'hidden', overflowY: 'hidden'
                }}>
    <button type="button" 
        data-toggle="collapse" 
        data-target="#filters" 
        className="col-1 btn visible-xs visible-sm collapsed d-none"
        >Filter</button>
        <Router>
    <div className={`col-2 left ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="filters">
    
      <Leftsection isDarkMode={isDarkMode}/>
    </div>
    <Routes>
    <Route  path="/today" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="today" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/all" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="all" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/important" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="important" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/completed" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="completed" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/incomplete" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="incomplete" isDarkMode={isDarkMode}/>
    </div>
    }/>
    <Route  path="/about" element={
      <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
        <CenterSection navlink="about" isDarkMode={isDarkMode}/>
    </div>
    }/>
    </Routes>
    
    

    </Router>
     
    
    
    <div className={`col-2 align-items-end right ${isDarkMode ? 'dark-mode' : 'light-mode'}  `}>
    
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
    
    </NotesState>
  );
}

export default App;
