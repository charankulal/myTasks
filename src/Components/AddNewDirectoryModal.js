import React from 'react'
import "../Styles/AddNewDirectoryModal.css"

export default function AddNewDitectoryModal(props) {
  return (
    <>
    <button type="button" className="btn border-dotted text-faded" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@getbootstrap" >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" >
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                New
              </button>


<div className={`modal fade ${
          props.isDarkMode ? "dark-mode" : "light-mode"
        }`} id="exampleModal1" tabIndex="-1"  aria-hidden="true"
        data-bs-theme={`${
          props.isDarkMode ? "dark" : "light"
        }`}>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 " id="exampleModalLabel" style={{marginLeft:"25%"}}>Create New Directory</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title"/>
          </div>
          
        </form>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Create</button>
      </div>
      
    </div>
  </div>
</div>
      
    </>
  )
}
