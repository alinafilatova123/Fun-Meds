import React, {useState} from 'react';
import './gallery.css';
import DecorElLeft from '../DecorEl/DecorElLeft';
import DecorElRight from '../DecorEl/DecorElRight';
import { motion } from "framer-motion";
import data from '../../data/images.json';


function Gallery() {

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

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (link) =>{
    setTempImgSrc(link);
    setModel(true);
  }


  return (
    <div className='fm__gallery' id='gallery'>

      <div className='fm__gallery-header'>
        <DecorElLeft/>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{amount: 0.2 , once: true}}
          transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 1,
          }}
          >My Recent Works</motion.h1>
        <DecorElRight/>
      </div>

      <div className={model? "model open" : "model"} onClick={()=> setModel(false)}>
        <img src={tempImgSrc} alt="img" />
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={galleryAnimation}
        viewport={{amount: 0.2 , once: true}}
        transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 1,
        }}

        className='fm__gallery-container'>
        {data.data.map((item, i)=>{
          return(
            <div key={i} className="fm__gallery-item">
              <img src={item.link} alt="" className="gallery-image" onClick={()=> getImg(item.link)}/>
            </div>
          )
        })}
      </motion.div>
      
    </div>
  )
}

export default Gallery
