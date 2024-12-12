import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Link as Link1} from 'react-scroll'

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-white.png'


import NavModal from './nav-modal'

export default function SinglePageNavbar() {

    let [show, setShow] = useState(false);
    let[scroll,setScroll] = useState(false)
  
  useEffect(() => {
      window.scrollTo(0,0)
  
      const handlerScroll=()=>{
          if(window.scrollY > 50){
              setScroll(true)
          }else{setScroll(false)}
      }
  
      window.addEventListener('scroll',handlerScroll)
      return () => {
        window.removeEventListener('scroll',handlerScroll)
      };
    }, []);

  return (
    <>
    <header id="topnav" className={`defaultscroll sticky ${scroll ? 'nav-sticky' : ''}`}>
            <div className="container">
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logoDark} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
                    </span>
                    <img src={logoLight} className="logo-dark-mode" alt=""/>
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link className={`navbar-toggle ${show ? 'open' : ''}`} id="isToggle" onClick={()=>setShow(!show)}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <NavModal/>
        
                <div id="navigation" className={show ? 'd-block' : 'd-none'}>
                    <ul className="navigation-menu nav-right nav-light" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 activeClass='active' duration={500}  spy={true} smooth={true} to="home">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 activeClass='active' duration={500}  spy={true} smooth={true} to="causes">Causes</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 activeClass='active' duration={500}  spy={true} smooth={true} to="priorities">Priorities</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 activeClass='active' duration={500}  spy={true} smooth={true} to="volunteers">Volunteers</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 activeClass='active' duration={500}  spy={true} smooth={true} to="blogs">Blogs</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
     
    </>
  )
}
