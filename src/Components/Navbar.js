import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
   
  return (
    <nav className='nav'>
        <ul className="nav flex-column">
  <li className="nav-item ">
  <Link className="nav-link active px-4 py-2 " to="/today"><Button text="Today's Tasks" class=" btn col-12 w-100"/></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active px-4 py-2" to="/"><Button text="All Tasks" class=" btn col-12 "/></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active px-4 py-2" to="/"><Button text="Important Tasks" class=" btn col-12 "/></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active px-4 py-2" to="/"><Button text="Completed Tasks" class=" btn col-12 "/></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active px-4 py-2" to="/"><Button text="Uncompleted Tasks" class=" btn col-12 "/></Link>
  </li>
</ul>
    </nav>
  )
}
