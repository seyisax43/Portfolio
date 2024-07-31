

import './portfolio.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: "React E_Commerce",
    img: "/serv1.jpg",
    desc: "I develop a dynamic e-commerce platform with user authentication, product listings, a shopping cart, payment gateway integration, and an admin dashboard for inventory managemen.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: "/serv4.jpg",
    desc: "I specialize in crafting sleek, responsive portfolio websites that showcase your work with elegance and clarity. Leveraging the latest in React and modern web design principles.",
  },
  {
    id: 3,
    title: "Academic  Website",
    img: "/serv2.jpg",
    desc: "A comprehensive website for a school, including features like student management, teacher profiles, class schedules, and a news section. Built with ReactJs for real-time data updates.",
  },

];

const Single = ({ item }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref, 
  });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container" id='portfolio'>
            <div className="wrapper">
                <div className="image"  ref={ref}>
                <img src={item.img} alt="" />
                </div>
            
            <motion.div className="textContainer" style={{y}} >
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
                </motion.div>
                </div>
        </div>
    </section>;
    
 
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
