import React from 'react'
import './Loading.css'
import {motion} from 'framer-motion'
function Loading() {
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
           
          },
          exit: {
            opacity: 0,
            y: -200,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          },
       
      };
      const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      };
    return (
        <div className="loader">
            <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="loading-box">
                <div className="text-box">
                   Almost there !
                </div>
            </motion.div>
        </div>
    )
}

export default Loading
