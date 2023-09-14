import React from "react";
// import Button from "./Button";

export default function Progressbar() {
  return (
    <>
    <span className="my-4 py-4 d-flex justify-content-between " >
        <span>
        All Tasks
        </span>
        2/4
    </span>
    
      <div
        className="progress my-2"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        // style={{width:"80%"}}
      >
        <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
      </div>
      <hr />
      <p>No tasks today</p>
      <p align="centre" style={{marginTop:"150%"}}>
  <input type="button" className="btn no-border" value="Delete all Data" style={{cursor:"pointer"}} />
</p>
      
    </>
  );
}
