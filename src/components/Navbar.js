import React, {useEffect, useState} from 'react'
import logo from "../img/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa"
import { Button } from './Button'
import "./Navbar.css"
import {IconContext} from 'react-icons/lib'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)



    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
<>
<IconContext.Provider value ={{color:"#fff"}}>
<div className="navbar">
    <div className="navbar-container container">
        <Link   className="navbar-logo"      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000} onClick={closeMobileMenu}>
        <img src={logo}/>
           HealthOne
        </Link>
        <div className="menu-icon" onClick= {handleClick}>
            {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link className="nav-links"  to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000} onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-links"  to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000} onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-links"  to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000} onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>


            <li className="nav-btn">
                {button ? (
                    <Link className="nav-links" to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000} onClick={closeMobileMenu}><Button buttonStyle="btn--outline">Contact Us</Button></Link>
                ) : (
                    <Link to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000} onClick={closeMobileMenu} className="nav-links">
                        <Button buttonStyle= "btn--outline" buttonSize="btn--mobile">Contact Us</Button>
                    </Link>
                )}
            </li>
        </ul>
    </div>
</div>
</IconContext.Provider>
</>
    )
}

export default Navbar
