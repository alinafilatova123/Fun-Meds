import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import DecorElLeft from '../DecorEl/DecorElLeft';
import DecorElRight from '../DecorEl/DecorElRight';
import { motion } from "framer-motion";

function Contact() {

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

  const pricingAnim = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const [formData, setFormData] = useState({
    form_name: "",
    user_email: "",
    message:""
  });

  function handleChacge(event) {
    setFormData(event.target.name)
  }

  const form = useRef();
  
  function sentEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ji1faia','template_b15an88', form.current, 'lzuz9XoL1O9orY99M')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current?.reset()
  }

  return (
    <div className='fm__contact section__padding' id='contact'>
      
      <div className='fm__contact-header'>
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
        >Contact Me</motion.h1>
        <DecorElRight/>
      </div>

      <motion.form 
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        viewport={{amount: 0.2 , once: true}}
        transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 1,
        }}

        onSubmit={(sentEmail)} ref={form}>

        <div className='fm__contact-input-container'>
          <p>Introduce Yourself:</p>
          <input
            required
            type="text" 
            name='from_name'
            placeholder='Your Name'
            onChange={handleChacge}
          />
        </div>

        <div className='fm__contact-input-container'>
          <p>Email:</p>
          <input 
            required
            type="email" 
            name="user_email"
            placeholder="Your Email"
            onChange={handleChacge}
          />
        </div>

        <div className='fm__contact-input-container'>
          <p>Message:</p>
          <textarea
            required
            placeholder='Your Message'
            name='message'
            onChange={handleChacge}
          />
        </div>
        <motion.button 
          initial="hidden"
          whileInView="visible"
          variants={pricingAnim}
          viewport={{once: true}}
          transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}

          className='form-btn' type='submit'>Submit</motion.button>
      </motion.form>

    </div>
  )
}

export default Contact