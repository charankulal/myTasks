import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./AllTasks";
import TodayTasks from "./TodayTasks";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";
import ImportantTasks from "./ImportantTasks";
import Navbar from "./Navbar";

export default function Navigation(props) {
  return (
    
      <BrowserRouter>
      <Navbar isDarkMode={props.isDarkMode}/>
        <Routes>
          
          <Route exact path="/" element={<TodayTasks />}/>
            <Route exact path="/" element={<AllTasks />} />
            <Route exact path="/" element={<ImportantTasks />} />
            <Route exact path="/" element={<CompletedTasks />} />
            <Route exact path="/" element={<UncompletedTasks />} />
          
       
        </Routes>
        
      </BrowserRouter>
   
  );
}
