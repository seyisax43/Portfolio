import './contact.scss'
import  { useState } from 'react';
import {motion} from 'framer-motion'

const variants = {
    initial: {
        y:500,
        opacity:0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren:0.1,
        }
    }

}






function Contact() {

const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


     const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };


  return (
      <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" onSubmit={handleSubmit}id="contact-form">
          <motion.div className="textContainer" variants={variants}>
              <motion.h1 variants={variants}>Let's Work Together</motion.h1>
              <motion.div className="item" variants={variants}>
                  <h2>Email</h2>
                  <span>seyisax43@gmail.com</span>
              </motion.div>
               <motion.div className="item" variants={variants}>
                  <h2>Address</h2>
                  <span>Faturoti House, Adjacent No Other Way Evangelical Church,<br /> Aduloju Ibadan, Oyo State.</span>
              </motion.div>
               <motion.div className="item" variants={variants}>
                  <h2>Phone</h2>
                  <span>+234-706-062-1198 <br /> +234-915-741-0424</span>
              </motion.div>
          </motion.div>
          <motion.div className="formContainer">
              <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                     <svg width="500px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#1C274C" strokeWidth="0.2" strokeLinecap="round"/>
            <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" strokeWidth="0.2" strokeLinecap="round"/>
            <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#1C274C" strokeWidth="0.2" strokeLinecap="round"/>
            </svg>  
              </motion.div>
              
         
              <motion.form  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4, duration:1}}>
            

              <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                      onChange={handleChange}
                      placeholder='Name'
                      required
                  />
                  
                 <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                      onChange={handleChange}
                       placeholder='Email'
                      required
                />
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                      onChange={handleChange}
                      placeholder='Message'
                      rows={8}
                      required
                ></textarea>

                  <button>Submit</button>
              </motion.form>
           </motion.div>
    </motion.div>
  )
}

export default Contact