import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
   
  return (
    <div className='header'>
      <div className='home'>
        <Link to='/'>Safe-Place</Link>
      </div>
      <div className='link'>
        <div className='link about'>
          <Link to='/about'>About</Link>
        </div>
        <div className='link contact'>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Header;
