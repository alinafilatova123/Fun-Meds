import React from 'react';
import DecorElLeft from '../DecorEl/DecorElLeft';
import DecorElRight from '../DecorEl/DecorElRight';
import './socials.css';
import { motion } from "framer-motion";

function Socials() {

  const textAnimation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='fm__socials section__padding' id='socials'>

      <div className='fm__socials-header'>
        <DecorElLeft/>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{once: true}}
          transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 1,
          }}
        >Follow Me On</motion.h1>
        <DecorElRight/>
      </div>

      <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{amount: 0.2 , once: true}}
          transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 1,
          }}

        className='fm__socials-container'>

        <div className='fm__socials-container-element'>
          <h3>
            <div className='fm_marquee-wrapper'>
              <div className='fm_marquee-text'> 
                <a href="https://www.artstation.com/funmeds" target="_blank" rel="noopener noreferrer">
                  <p className='text'>
                    &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation &#8226; ArtStation
                  </p>
                </a>
              </div>
            </div>
          </h3>
        </div>

        <div className='fm__socials-container-element'>
          <div className='fm_marquee-wrapper-2'>
            <div className='fm_marquee-text'>
              <a href="https://www.deviantart.com/funmeds" target="_blank" rel="noopener noreferrer">
                <p className='text'>
                  &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt &#8226; DeviantArt
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className='fm__socials-container-element'>
          <h3>
            <div className='fm_marquee-wrapper'>
              <div className='fm_marquee-text'>
                <a href="https://twitter.com/fun_meds" target="_blank" rel="noopener noreferrer">
                  <p className='text'>
                  &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter &#8226; Twitter
                  </p>
                </a>
              </div>
            </div>
          </h3>
        </div>

      </motion.div>

    </div>
  )
}

export default Socials