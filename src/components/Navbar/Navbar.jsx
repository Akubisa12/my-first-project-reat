import {useState} from 'react';
import "./navbar.css";

const Navbar = () => {
  const [icon,setIcon] = useState("#home");
  return (
    <nav>
      <div className='navContainer'>
        <h1 className='navName'>Jessen</h1>
        <ul className='navMenu'>
          <li>
            <a className='navItem' href="#home" onClick={()=>setIcon("#home")}>
              <i className={icon === "#home"? "uil uil-estate navIcon iconActive" : "uil uil-estate navIcon"}></i>
              <span className="navLink">Home</span>
            </a>
          </li>
          <li>
            <a className='navItem' href="#about" onClick={()=>setIcon("#about")}>
              <i className={icon === "#about" ? "uil uil-user navIcon iconActive" : "uil uil-user navIcon"}></i>
              <span className='navLink'>About</span>
            </a>
          </li>
          <li>
            <a className='navItem' href="#project" onClick={()=>setIcon("#project")}>
              <i className={icon === "#project" ? "uil uil-star navIcon iconActive" : "uil uil-star navIcon"}></i>
              <span className='navLink'>Project</span>
            </a>
          </li>
          <li>
            <a className='navItem' href="#contact" onClick={()=>setIcon("#contact")}>
              <i className={icon === "#contact" ? "uil uil-telegram-alt navIcon iconActive" : "uil uil-telegram-alt navIcon"}></i>
              <span className='navLink'>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar