import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from "./logo.svg";

function Navbar() {
  
  // A handler hook to open and close the sidebar
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#4f3bba' }}>
        
        {/* Sidebar is in off-position and a handler function to open it*/}

        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>         
        </div>
        
         {/* Sidebar is getting on-position below by click handler */}
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>          
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' > 
              <Link to='#' className='menu-bars'onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
              <img src={logo} alt="Logo" />

                {/* Navigation bar content is rendered below  */}

            </li>          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            {/* Navigation bar down-part */}

            <div className='nav-down'>
              <p>Need</p>
              <p>Assistance?</p>
              <button className='contact-button' >Contact Us</button>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
