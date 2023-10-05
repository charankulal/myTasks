import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import $ from "jquery";
import AddNewDitectoryModal from "./AddNewDirectoryModal";

export default function Directory(props) {
  $(document).ready(function () {
    let i=1;
    $(".directory").on('click',function () {
      i=i+1
      if (i%2===1) {
        $("i").removeClass("bi-chevron-right")
        $('i').addClass('bi-chevron-down')
        document.getElementById('main').style.display='block'

      }
      else if (i%2===0) {
        $("i").removeClass("bi-chevron-down")
        $('i').addClass('bi-chevron-right')
        document.getElementById('main').style.display='none'
       
        
      }
      
      
    });
  });

  return (
    <>
      <div className="justify-content-center  m-3">
        <div className=".fs-4 directory ">
          Directories
          <i className="bi bi-chevron-right"></i>
        </div>

        <p className="mx-3 main" id="main" style={{display:'none'}}>Main</p>

        <AddNewDitectoryModal isDarkMode={props.isDarkMode} />
      </div>
    </>
  );
}
