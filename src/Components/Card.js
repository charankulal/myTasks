import React from "react";
import $ from "jquery";

const Card = () => {

      $(document).ready(function () {
        let i = 0;
        $(".star").on("click", function () {
          i = i + 1;
          if (i % 2 === 1) {
            $(".star").removeClass("fa-star-o");
            $(".star").addClass("fa-star");
          } else if (i % 2 === 0) {
            $(".star").removeClass("fa-star");
            $(".star").addClass("fa-star-o ");
            
          }
        });
      });
  const changeText = () => {
    var text = document.getElementById("completed");
    if (text.innerHTML === "Completed") {
      text.innerHTML = "Not Completed";
    } else {
      text.innerHTML = "Completed";
    }
  };

  return (
    <div className="card m-3" style={{ width: " 30%",height:"150%"}}>
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
          <button
            type="button"
            className="btn btn-primary col-6"
            id="completed"
            onClick={changeText}
          >
            Completed
          </button>
          <i className="fa star fa-star-o my-2 col-2 fs-4"></i>
          <i class="fa fa-trash my-2 col-2 fs-4" aria-hidden="true"></i>
          <i class="fa fa-edit my-2 col-2 fs-4" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
