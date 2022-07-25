import React, {useState} from 'react';
import cmm1 from '../../images/cmm1.jpg';
import cmm2 from '../../images/cmm2.jpg';
import cmm3 from '../../images/cmm3.jpg';
import './pricing.css';
import DecorElLeft from '../DecorEl/DecorElLeft';
import DecorElRight from '../DecorEl/DecorElRight';
import { motion } from "framer-motion";

function Pricing() {

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
  const galleryAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const pricingAnim = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (link) =>{
    setTempImgSrc(link);
    setModel(true);
  }

  return (
    <div className='fm__pricing' id='pricing'>

      <div className='fm__pricing-header'>
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
          >I Take Comissions</motion.h1>
        <DecorElRight/>
      </div>

      <div className={model? "model open" : "model"} onClick={()=> setModel(false)}>
        <img src={tempImgSrc} alt="img" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={pricingAnim}
        viewport={{amount: 0.2, once: true}}
        transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 2,
        }}

        className='fm__pricing-img-container'>
        <div>
          <img src={cmm1} alt="" onClick={()=> getImg(cmm1)}/>
        </div>
        <div>
          <img src={cmm2} alt="" onClick={()=> getImg(cmm2)}/>
        </div>
        <div>
          <img src={cmm3} alt="" onClick={()=> getImg(cmm3)}/>
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={pricingAnim}
        viewport={{amount: 0.2 , once: true}}
        transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 2,
        }}
        
        className='fn__pricing-info'>
        <h3>Portraits / <span>50$</span></h3>
        <button><a href="#contact">Contact Me</a></button>
      </motion.div>

    </div>
  )
}

export default Pricing