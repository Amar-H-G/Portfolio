import './Nav.modules.css'

const NavBar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="left-nav nav-items">Portfolio</div>
        <div className="right-nav">
          <a className='nav-items' href="/">Home</a>
          <a className='nav-items' href="/project">Projects</a>
          <a className='nav-items' href="/skills">Skills</a>
          <a className='nav-items' href="/resume">Resume</a>
          <a className='nav-items' href="/contact">Contact</a>
          <a className='nav-items' href="/about">About</a>
          
        </div>
      </div>
    </>
  );
};
export default NavBar;
