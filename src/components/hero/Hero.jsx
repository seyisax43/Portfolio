

import './hero.scss'
import { motion} from 'framer-motion'



const textVariants = {
    initial: {
        x: -500,
        Opacity: 0,
    },
    animate: {
        x: 0,
        Opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Hero() {
  return (
      <div className='hero'>
          <div className="heroWrapper">
            <motion.div className="textContainer" variants = {textVariants} initial='initial' animate='animate'>
                  <motion.h2 variants = {textVariants}>SEYI SCOPE</motion.h2>
                  <motion.h1 variants = {textVariants}>Web Developer and UI Designer</motion.h1>
                  <motion.div variants = {textVariants} className="buttons" >
                     <a href="#portfolio"> <motion.button variants = {textVariants} className='heroButton'>See The Latest Works</motion.button></a>
                    <a href="#contact-form" > <motion.button variants = {textVariants} className='heroButton' >Contact Me</motion.button></a>
                  </motion.div>
              </motion.div>
              </div>
          <div className="imageContainer">
            
              <img src="/seyi.png" alt=""  className='heroImg'/>
          </div>
    </div>
  )
}

export default Hero