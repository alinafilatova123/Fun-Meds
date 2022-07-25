import React from 'react';
import './footer.css';
import {FaArtstation, FaDeviantart, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div className='fm__footer'>

      <div className='fm__footer-container'>

        <div className='fm__footer-links'>
          <p><a href="/">Home</a></p>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#socials">Socials</a></p>
          <p><a href="#contact">Contact Me</a></p>
        </div>

        <div className='fm__footer-links'>
          <div>
            <FaArtstation className='icon'/>
            <p><a href="https://www.artstation.com/funmeds" target="_blank" rel="noopener noreferrer">ArtStation</a></p>
          </div>

          <div>
            <FaDeviantart className='icon'/>
            <p><a href="https://www.deviantart.com/funmeds" target="_blank" rel="noopener noreferrer">DeviantArt</a></p>
          </div>

          <div>
            <FaTwitter className='icon'/>
            <p><a href="https://twitter.com/fun_meds" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          </div>
        </div>
      
      </div>

    </div>
  )
}

export default Footer