import React, {useState} from 'react';
import './navbar.css';
import logo from '../../images/funmeds.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='fm__navbar'>
      
      <div className='fm__navbar-header'>
        
        <a href="#home"><img src={logo} alt="" /></a>

        <div className='fm__navbar-links-container'>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#socials">Socials</a></p>
          <p><a href="#contact">Contact Me</a></p>
        </div>

        <div className='fm__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={35} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={35} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='fm__navbar-links-container-menu'>
              <p><a href="#gallery">Gallery</a></p>
              <p><a href="#pricing">Pricing</a></p>
              <p><a href="#socials">Socials</a></p>
              <p><a href="#contact">Contact Me</a></p>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Navbar