import React from 'react'
import Navigation from './Navigation'
import "../Styles/NewTaskModal.css"
// import AddNewTaskModal from './AddNewTaskModal'

export default function Leftsection(props) {
  return (
    <>
    <h4 className='text-center my-3 text-lg' style={{paddingBottom:"6rem",paddingTop:"2rem"}}>TO-DO LIST</h4>

{/* <AddNewTaskModal isDarkMode={props.isDarkMode}/> */}
<Navigation isDarkMode={props.isDarkMode}/>

    </>
  )
}
