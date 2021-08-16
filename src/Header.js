import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {motion} from 'framer-motion'
function Header() {
    return (
        <div className="header"> 
            <div className="header-container">
            <motion.div 
             drag
             dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
             dragElastic={0.7}
            className="header-left">UNEO.</motion.div>
            <div className="header-right">
                <p>SERVICES</p>
                <p>CLIENTS</p>
                <p>CAREERS</p>
                <p>ABOUT</p>
                <p><a href="">  CONTACT</a></p>
                </div>
            <MenuIcon className="menu-icon"></MenuIcon>
            </div>
            
        </div>
    )
}

export default Header
