import React from 'react'
import './Floatingpage.css'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {motion } from 'framer-motion'
function Floatingpage() {
    const containerVariants = {
        hidden: { 
          opacity: 0, 
          x: '-5vw' 
        },
        visible: { 
          opacity: 0.7, 
          x: 0,
          
          transition: {  ease: "easeInOut",duration:0.4  }
        },
        hover: {
            scale: 1.1,
           
          }
       
      };
    return (
        <div className="link-container">
        <div className="link-spacing">
            <div className="link-text">
                <h2>All work, all play</h2>
                <h3>Selected projects</h3>
            </div>
        </div>
        <div className="event-container">
           <div className="two">
               <div className="left">
               <motion.div variants={containerVariants} whileHover="hover" className="event one"></motion.div>

               </div>
          <div className="right">
          <motion.div variants={containerVariants} whileHover="hover" className="event twice"
         ></motion.div>
          </div>
          
           </div>
           <div className="two">
               <div className="left">
                   <motion.div variants={containerVariants} whileHover="hover" className="event three"
                  ></motion.div></div>
               <div className="right">
                    <motion.div variants={containerVariants} whileHover="hover"  className="event four"
                 
                    ></motion.div></div>

           </div>
           </div>
        <div className="joinus-container">
            <div className="joinus-spacing">
                <div className="joinus-image-container">
                    <div className="joinus-image">
                        <div className="joinus-final-image">
                            
                        </div>
                    </div>
                </div>
                <div className="joinus-text">
                    <h2>
                        Join us
                    </h2>
                    <h3>
                        Open possitions
                    </h3>
                </div>
            </div>
        </div>
    
    <div className="footer">
        <div className="footer-heading">
            <p>Uneo.</p>
        </div>
        <ul className="footer-content">
        <motion.li variants={containerVariants} whileHover="hover" >privacy</motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><SportsSoccerIcon></SportsSoccerIcon></motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><TwitterIcon/></motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><GitHubIcon/></motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><InstagramIcon/></motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><FacebookIcon></FacebookIcon></motion.li>
            <motion.li variants={containerVariants} whileHover="hover" ><LinkedInIcon></LinkedInIcon></motion.li>
          
        </ul>
    </div>
    </div>

    )
}

export default Floatingpage
