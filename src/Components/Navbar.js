import React from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import '../Styles/Navbar.css'
import $ from 'jquery'
import Directory from './Directory'
export default function Navbar() {
  $('li').click(function(){
    
    
    $(this).addClass('active').siblings().removeClass('active');
    
});
  return (
    <>
    <nav className='nav'>
        <ul className="nav flex-column">
  <li className="nav-item ">
  <Link className="nav-link" to="/today">Today's Tasks</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link " to="/">All Tasks</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link " to="/">Important Tasks</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link " to="/">Completed Tasks</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/">Uncompleted Tasks</Link>
  </li>
</ul>
    </nav>
<Directory/>
    </>
  )
}
