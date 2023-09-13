import React from 'react'
import '../Styles/CenterSection.css'

export default function CenterSection() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate); // "17-6-2022"
  return (
    <>
     <form className="d-flex col-5 my-4 nosubmit" role="search">
        <input className="form-control me-2 nosubmit" type="search" placeholder="Search" aria-label="Search"/>
        
        
      </form>
      <span>{date} </span>
    </>
  )
}
