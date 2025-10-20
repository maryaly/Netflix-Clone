import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import menu_icon from '../../assets/open_menu_icon.svg'
import close_icon from '../../assets/close_menu_icon.svg'
import { logout } from '../../utils/firebase.js'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

  const navRef = useRef();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!navRef.current) return; // prevent null errors
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark")
      } else {
        navRef.current.classList.remove("nav-dark")
      }
    })
  }, [])

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />

        <ul>
          <li onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>Home</li>
          <li onClick={() => {
            navigate("/tv-shows");
          }}>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' onClick={() => {
          navigate('/search')
        }} />
        <p className='children'>Children</p>
        <img src={bell_icon} alt="" className='icons bell' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign Out from Netflix</p>
          </div>
        </div>
      </div>

      {/* Hamburger icon - visible on mobile */}
      <img
        src={menu_icon}
        alt="menu"
        className="menu-icon"
        onClick={toggleDrawer}
      />
      {/* Overlay drawer for mobile */}
      <div className={`drawer-overlay ${drawerOpen ? 'show' : ''}`} onClick={closeDrawer}></div>

      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img src={close_icon} alt="close" className="close-icon" onClick={closeDrawer} />
        </div>
        <ul className="drawer-menu">
          <li onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" }); 
            closeDrawer();
          }}>Home</li>
          <li onClick={() => { navigate("/tv-shows"); closeDrawer(); }}>TV Shows</li>
          <li onClick={closeDrawer}>Movies</li>
          <li onClick={closeDrawer}>New & Popular</li>
          <li onClick={closeDrawer}>My List</li>
          <li onClick={closeDrawer}>Browse by Languages</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
