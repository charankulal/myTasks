import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./AllTasks";
import TodayTasks from "./TodayTasks";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";
import ImportantTasks from "./ImportantTasks";

export default function Navigation() {
  return (
    <nav className="nav flex-column">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<TodayTasks />}/>
            <Route path="/" element={<AllTasks />} />
            <Route path="/" element={<ImportantTasks />} />
            <Route path="/" element={<CompletedTasks />} />
            <Route path="/" element={<UncompletedTasks />} />
          
       
        </Routes>
        
      </BrowserRouter>
    </nav>
  );
}
