import React from "react";
import "../Styles/CenterSection.css";
import Button from "./Button";
import NewTaskModal from "./NewTaskModal";

export default function CenterSection(props) {
  var date = new Date().toDateString();

  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div className="row">
        <form className="d-flex col-5 my-4 nosubmit"  role="search">
          <input
            className="form-control me-2 nosubmit"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // style={{color:"red",backgroundColor:"#e0cfcf"}}
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
        <NewTaskModal isDarkMode={props.isDarkMode}/>

        <footer className="mt-auto fixed-bottom text-center"> 
    <p className="footer mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-github" viewBox="0 0 16 16">
              <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg><a class="no-text-decoration link-offset-2 link-underline link-underline-opacity-0 mx-2"
              href="https://github.com/charankulal">Charan-k-github</a></p>
    </footer>
      </div>
     
    </>
  );
}
