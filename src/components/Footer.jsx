import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div><img src="../assets/Insta.svg" alt="" /></div>
        <span>@safeplace</span>
      </div>
      <div>
        <div><img src="../assets/Whatsup.svg" alt="" srcset="" /></div>
        <span>8-999-99-99</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>Safe Place</div>
    </div>
  );
}
export default Footer