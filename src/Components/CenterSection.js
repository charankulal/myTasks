import React from "react";
import "../Styles/CenterSection.css";
import Button from "./Button";

export default function CenterSection() {
  var date = new Date().toDateString();

  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div className="row ">
        <form className="d-flex col-5 my-4 nosubmit" data-bs-theme={`${localStorage.getItem('theme')}`} role="search">
          <input
            className="form-control me-2 nosubmit"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <span className="col-3 my-4"> {`${date}`}</span>
        <div className="col-3 m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          onClick={onClick}
          className="bi bi-bell-fill "
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <Button text="Add new task" class=" btn btn-primary "/>
        </div>
      </div>
      <footer>
        <span>Charan K</span>
      </footer>
    </>
  );
}
