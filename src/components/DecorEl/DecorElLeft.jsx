import React from 'react';
import {BsRecordCircle, BsCircle, BsCircleFill} from 'react-icons/bs';
import { motion } from "framer-motion";
import {HiOutlineMinus} from 'react-icons/hi';
import './decorEl.css'

function DecorEl() {

  const decElAnim = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={decElAnim}
        viewport={{once: true}}
        transition={{
          ease: 'easeOut',
          type: "spring",
          duration: 2,
        }}

        className='decor'>
        <HiOutlineMinus size={10}/>
        <HiOutlineMinus size={10}/>
        <BsCircle size={10}/>
        <HiOutlineMinus size={10}/>
        <BsCircle size={15}/>
        <BsRecordCircle size={30}/>
        <HiOutlineMinus size={10}/>
        <BsCircleFill size={10}/>
        <HiOutlineMinus size={10}/>
      </motion.div>
    )
}

export default DecorEl
