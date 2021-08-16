import React from 'react'
import './Homepage2.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button } from '@material-ui/core';
import Floatingpage from './Floatingpage';
import {motion} from 'framer-motion'

function Homepage2() {
    const containerVariants = {
        hidden: { 
          opacity: 0, 
          x: '-5vw' 
        },
        visible: { 
          opacity: 0.7, 
          x: 0,
          
          transition: {  ease: "easeInOut",duration:0.8  }
        },
        hover: {
            scale: 1.1,
           
          }
       
      };
    return (
        <div className="homepage">
                              
            <div className="homepage-container">
                <div className="item-container">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="homepage-left">
                    <div className="text-container">
                        <h2>Featured project</h2>
                        <p>ClearMotion</p>
                        <p className="text-child">Stand still </p>
                        <motion.div variants={containerVariants} whileHover="hover" className="button-div">
                            More projects
                    </motion.div>
                    </div>
                    </motion.div>   
                    <motion.div className="homepage-right"   
                    variants={containerVariants}
                     initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    >
     
                    </motion.div>
                    <div className="round-div-container">
                    <div className="round-div"></div>
                    </div>
         
                </div>
            </div>
            <div className="intro-container">
                <div className="intro-spacing">
                    <div className="intro-text">
                        <h2>
                            Ueno is a full-service agency,busy
                             designing and building beautiful digital 
                             products, brand and experiences
                        </h2>
                        <div className="intro-button-div">
                            <ArrowForwardIosIcon className="arrow-icon"></ArrowForwardIosIcon>
                            <Button>Contact us</Button>
                        </div>
                    </div>
                </div>
            </div>
       
        {/* <div className="link-container">
            <div className="link-spacing">
                <div className="link-text">
                    <h2>All work, all play</h2>
                    <h3>Selected projects</h3>
                </div>
            </div>
        </div> */}

        
        <Floatingpage></Floatingpage>
        </div>
    )
}

export default Homepage2
