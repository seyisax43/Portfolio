// import {Link} from 'react-router-dom'
import { FaGithub,FaTwitter,FaLinkedin  } from 'react-icons/fa';
import Sidebar from '../sidebar/Sidebar';
import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <span className='logo'>SeyiScope</span>
        <div className="social">
          <a href="https://" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a>
              <a href="https://" target="_blank" rel="noopener noreferrer">  <FaTwitter /></a>
             <a href="https://github.com/seyisax43" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
        </div>
      </div>
</div>
  )
};

export default Navbar;