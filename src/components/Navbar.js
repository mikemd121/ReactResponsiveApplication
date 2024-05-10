import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
         <ul className='navbar-nav'>
         <li className='nav-item'>
             <Link className='nav-link' to="/">
                 Home
             </Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to="/report">
                 View Report
             </Link>
         </li>
         </ul>
        </nav>
  );
}

export default Navbar;