import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
           <div className="footer-content">
           <h1>HealthOne</h1><p>Copyright &copy; 2020</p>
           </div>
           <div className="footer-symbols">
        <FaFacebook className="icons" />
        <FaGithub className="icons"/>
        <FaTwitter className="icons"/>
        <FaInstagram className="icons"/>
           </div>
        </div>
    )
}

export default Footer
