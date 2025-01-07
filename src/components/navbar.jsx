import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoDark from '../assets/images/logo192.png'
import logoLight from '../assets/images/logo192White.png'


// import NavModal from './nav-modal'

export default function Navbar() {
    let[manu, setManu] = useState();
    let [show, setShow] = useState(false);
    let[scroll,setScroll] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
        setManu(window.location.pathname)

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
            <div className="logo-light-mode">
                <img 
                src={logoDark} 
                className="l-dark" 
                alt="" 
                style={{ width: '70px', height: '70px' }} 
                />
                <span className='l-dark text-dark pt-3'><h2 style={{ fontSize: window.innerWidth < 576 ? '1.2rem' : '2rem' }}>Tu Es Belle</h2></span>
                <img 
                src={logoLight} 
                className="l-light" 
                alt="" 
                style={{ width: '70px', height: '70px' }} 
                />
                <span className='l-light text-white pt-3'><h2 style={{ fontSize: window.innerWidth < 576 ? '1.2rem' : '2rem' }}>Tu Es Belle</h2></span>
            </div>
            <img 
                src={logoLight} 
                className="logo-dark-mode" 
                alt="" 
                style={{ width: '70px', height: '70px' }} 
            />
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

           {/* <NavModal/> */}
    
            <div id="navigation" className={show ? 'd-block' : 'd-none'}>
                <ul className="navigation-menu nav-right nav-light">

                    <li className={manu === '/' ? 'active' : ''}><Link to="/" className="sub-menu-item">Home</Link></li>

                    <li className={manu === '/aboutus' ? 'active' : ''}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                
                    <li className={`has-submenu parent-parent-menu-item ${['/page-item','/volunteer','/donate','/team','/testimonial','/faqs','/blog-item', '/blogs','/blog-sidebar', '/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/terms-item', '/terms', '/privacy','/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'active' : ''}`}>
                        <Link to="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/page-item','/volunteer','/donate','/team','/testimonial','/faqs','/blog-item', '/blogs','/blog-sidebar', '/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/terms-item', '/terms', '/privacy','/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'open' : ''}`}>
                            <li className={manu === '/volunteer' ? 'active' : ''}><Link to="/volunteer" className="sub-menu-item">Become a Volunteer</Link></li>
                            <li className={manu === '/donate' ? 'active' : ''}><Link to="/donate" className="sub-menu-item">Donate</Link></li>
                            <li className={manu === '/team' ? 'active' : ''}><Link to="/team" className="sub-menu-item">Team</Link></li>
                            <li className={manu === '/testimonial' ? 'active' : ''}><Link to="/testimonial" className="sub-menu-item">Testimonial</Link></li>

                            <li className={manu === '/faqs' ? 'active' : ''}><Link to="/faqs" className="sub-menu-item">FAQs</Link></li>
                            <li className={manu === '/blogs' ? 'active' : ''}><Link to="/blogs" className="sub-menu-item">Blog</Link></li>
                        </ul>
                    </li>

                    <li className={manu === '/services' ? 'active' : ''}><Link to="/services" className="sub-menu-item">Services</Link></li>
            
                    <li className={manu === '/contactus' ? 'active' : ''}><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </header>

    
    </>
  )
}
