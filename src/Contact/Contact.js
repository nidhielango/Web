import React from 'react';
import './Contact.css';
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';


function Contact() {
  return (
        <div className="contact">
            <div className='social'>
                <FaGithub className='icon' />
                <FaEnvelope className='icon' />
                <FaLinkedin className='icon' />
            </div>    
           <p>Made with 🖤 by Nidhi Elango</p>
        </div>
  )

}

export default Contact