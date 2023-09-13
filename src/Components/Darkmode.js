import "./src/DarkMode.css";
import React from "react";
// import CenterSection from "./CenterSection";

// 1
const setDark = () => {
  
  // 2
  localStorage.setItem("theme", "dark");
  localStorage.setItem("Number", "0");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
  
  
};

const setLight = () => {
 
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("Number", "1");
  
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <>

    <p className="px-4">Switch Mode</p>
    <div className="toggle-theme-wrapper">
        
        
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
      
       
      
    </div>
    </>
  );
};

export default DarkMode;