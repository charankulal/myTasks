import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import $ from 'jquery'
import AddNewDitectoryModal from "./AddNewDirectoryModal";

export default function Directory(props) {

$(document).ready(function () {
  $(".directory").click(function () {
    // var isActive = $(".bi").hasClass('bi-chevron-right');
    if ($("i").hasClass('bi-chevron-right')){

      $(".bi-chevron-right").toggleClass("bi-chevron-right bi-chevron-down");

     
    }
   
   
  });
});
$(".directory").click(function(){
  if ($("i").hasClass('bi-chevron-down')){

  // console.log("Clicked")
  $(".bi-chevron-down").toggleClass("bi-chevron-down bi-chevron-right");
  }
})

  return (
    <>
 
      <div className="justify-content-center  m-3">
        <div className=".fs-4 directory " >
          Directories
          <i className="bi bi-chevron-right"></i>
        </div>

        <p className="mx-3">Main</p>

        <AddNewDitectoryModal isDarkMode={props.isDarkMode} />
      </div>
    </>
  );
}
