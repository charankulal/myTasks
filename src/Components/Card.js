import React from "react";

const Card = () => {

    const changeText=()=>{
var text=document.getElementById('completed')
        if(text.innerHTML==="Completed")
        {
text.innerHTML="Not Completed"
        }
        else{
            text.innerHTML="Completed" 
        }

    }

  return (
    <div className="card" style={{ width: " 18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Task 1</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          This is the sample task
        </h6>
        <time class="mt-auto flex w-full">
        <i class="bi bi-calendar-check"></i>
          05/15/2023
        </time>
        <div className="row d-flex my-3">
        <button type="button" className="btn btn-primary" id="completed" onClick={changeText}>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
