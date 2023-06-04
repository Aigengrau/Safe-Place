import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Insta from "../assets/Insta.svg";
import Whatsup from "../assets/Whatsup.svg";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__ref'>
        <div className='footer__inst'>
          <img src={Insta} alt='instagram' />
          <span>@safeplace</span>
        </div>
        <div className='footer__whatsup'>
          <img src={Whatsup} alt='' srcset='' />
          <span>8-999-99-99</span>
        </div>
      </div>
      <div className='footer__links'>
        <div className='footer__home'>
          <Link to='/'>HOME</Link>
        </div>
        <div className='footer__about'>
          <Link to='/about'>ABOUT</Link>
        </div>
        <div className='footer__contact'>
          <Link to='/contact'>CONTACT</Link>
        </div>
      </div>
      <div className='name'>Safe Place</div>
    </div>
  );
}
export default Footer;
