
import './services.scss'
import {motion} from 'framer-motion'

const variants = {
    initial: {
        x: -100,
        y: 100,
        Opacity:0
    },
    animate: {
        x: 0,
        Opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren:0.1,
        },
    },
}



function Services() {
  return (
      <motion.div className='services' variants={variants}
        //   initial="initial"
        //   whileInView="animate"
      id='services'>
          
          <motion.div className="textContainer" variants={variants} >
              <p>I focus on helping your brand grow
                  <br />and move forward</p> 
              <hr />
          </motion.div>
          <motion.div className="tittleContainer" variants={variants}>
              <div className="tittle">
                  <img src="/mountain.jpg" alt=""  className='imageTittle'/>
                   <h1><motion.b whileHover={{color:"orange",}} >Unique </motion.b> Ideas</h1>
              </div>
               <div className="tittle">
                  <h1><motion.b whileHover={{color:"orange",}}>For Your </motion.b> Business.</h1>
                    <button  >WHAT WE DO?</button>
              </div>
            
          </motion.div>
          <motion.div className="listContainer" variants={variants}>
              <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                  <h2>Web Content</h2>
                  <p>Creative web content creator skilled in front-end development with React, Redux, and Material UI. Expert in crafting responsive, engaging designs and interactive features. Passionate about enhancing user experience and staying current.</p>
                   {/* <a href="#contact-form"> <button>click</button></a> */}
              </motion.div>
               <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                  <h2>Web Design</h2>
                  <p>Creative web designer skilled in Figma and Material UI, crafting visually appealing, user-friendly interfaces. Focused on responsive, modern design to enhance user experience and engagement.</p>
                   {/* <a href="#contact-form"> <button>click</button></a> */}
              </motion.div>
               <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                  <h2>Web Development</h2>
                  <p>Experienced web developer proficient in React and Redux. Builds dynamic, responsive websites with optimized performance. Committed to high-quality code and effective user interaction through modern development practices.</p>
                  {/* <a href="#contact-form"> <button>click</button></a> */}
              </motion.div>
          </motion.div>
    </motion.div>
  )
}

export default Services