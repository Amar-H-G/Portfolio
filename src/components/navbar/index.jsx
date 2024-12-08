import { Link } from 'react-router-dom';
import './Nav.modules.css'

const NavBar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="left-nav nav-items">Portfolio</div>
        <div className="right-nav">
          <Link className='nav-items' to="/">Home</Link>
          <Link className='nav-items' to="/project">Projects</Link>
          <Link className='nav-items' to="/skills">Skills</Link>
          <Link className='nav-items' to="/resume">Resume</Link>
          <Link className='nav-items' to="/experience">Experience</Link>
          <Link className='nav-items' to="/contact">Contact</Link>
          <Link className='nav-items' to="/about">About</Link>
          
        </div>
      </div>
    </>
  );
};
export default NavBar;
