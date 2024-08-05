import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact">
    <h1>CONTACT ME</h1>
    <div className="contact-icon">
        <a href="https://www.instagram.com/niksingh1902_?igsh=NTV3czRxcTg5a21o" className="items"><FaInstagram  className='icons'/></a>
        <a href="https://www.facebook.com/profile.php?id=100093272736239&mibextid=rS40aB7S9Ucbxw6v" className="items"><FaFacebook  className='icons'/></a>
        <a href="https://github.com/NikhilSingh1902" className="items"><FaGithub  className='icons'/></a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-singh-09688b293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="items"><FaLinkedin  className='icons'/></a>
        <a href="mailto:niksingh1902@gmail.com" className="items"><SiGmail  className='icons'/></a>
    </div>
    </div>
    </>
  )
}

export default Contact
