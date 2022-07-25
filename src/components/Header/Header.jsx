import React from 'react';
import headerImg from '../../images/header-img.jpg';
import './header.css';
import {MdArrowDropDown} from 'react-icons/md';
import { motion } from "framer-motion";

function Header() {

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='fm__header'>

      <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{amount: 0.2 , once: true}}
          transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}>

        <h3>Welcome</h3>
        <MdArrowDropDown color="#fff" size={60} cursor="pointer"/>

      </motion.div>

    </div>
  )
}

export default Header