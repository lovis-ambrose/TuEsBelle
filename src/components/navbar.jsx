import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoDark from '../assets/images/logo192.png'
import logoLight from '../assets/images/logo192White.png'


import NavModal from './nav-modal'

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
            <span className="logo-light-mode">
                <img 
                src={logoDark} 
                className="l-dark" 
                alt="" 
                style={{ width: '70px', height: '70px' }} 
                />
                <img 
                src={logoLight} 
                className="l-light" 
                alt="" 
                style={{ width: '70px', height: '70px' }} 
                />
            </span>
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

           <NavModal/>
    
            <div id="navigation" className={show ? 'd-block' : 'd-none'}>
                <ul className="navigation-menu nav-right nav-light">

                    <li className={manu === '/' ? 'active' : ''}><Link to="/" className="sub-menu-item">Home</Link></li>

                    <li className={manu === '/aboutus' ? 'active' : ''}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                    
                    <li className={manu === '/services' ? 'active' : ''}><Link to="/services" className="sub-menu-item">Services</Link></li>
            
                    <li className={`has-submenu parent-parent-menu-item ${['/page-item','/service-detail','/pricing','/team','/testimonial','/faqs','/blog-item', '/blogs','/blog-sidebar', '/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/terms-item', '/terms', '/privacy','/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'active' : ''}`}>
                        <Link to="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/page-item','/service-detail','/pricing','/team','/testimonial','/faqs','/blog-item', '/blogs','/blog-sidebar', '/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/terms-item', '/terms', '/privacy','/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'open' : ''}`}>
                            <li className={manu === '/service-detail' ? 'active' : ''}><Link to="/service-detail" className="sub-menu-item">Service Detail</Link></li>
                            <li className={manu === '/pricing' ? 'active' : ''}><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                            <li className={manu === '/team' ? 'active' : ''}><Link to="/team" className="sub-menu-item">Team</Link></li>
                            <li className={manu === '/testimonial' ? 'active' : ''}><Link to="/testimonial" className="sub-menu-item">Testimonial</Link></li>

                            <li className={manu === '/faqs' ? 'active' : ''}><Link to="/faqs" className="sub-menu-item">FAQs</Link></li>

                            <li className={`has-submenu parent-menu-item ${['/blog-item', '/blogs','/blog-sidebar', '/blog-detail'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setManu(manu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/blog-item', '/blogs','/blog-sidebar', '/blog-detail'].includes(manu) ? 'open' : ''}`}>
                                    <li className={manu === '/blogs' ? 'active' : ''}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                    <li className={manu === '/blog-sidebar' ? 'active' : ''}><Link to="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                    <li className={manu === '/blog-detail' ? 'active' : ''}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                </ul> 
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/auth-item','/login','/signup','/reset-password','/lock-screen'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setManu(manu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/auth-item','/login','/signup','/reset-password','/lock-screen'].includes(manu) ? 'open' : ''}`}>
                                    <li className={manu === '/login' ? 'active' : ''}><Link to="/login" className="sub-menu-item"> Login</Link></li>
                                    <li className={manu === '/signup' ? 'active' : ''}><Link to="/signup" className="sub-menu-item"> Signup</Link></li>
                                    <li className={manu === '/reset-password' ? 'active' : ''}><Link to="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                    <li className={manu === '/lock-screen' ? 'active' : ''}><Link to="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                </ul> 
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/terms-item', '/terms', '/privacy'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setManu(manu === '/terms-item' ? '' : '/terms-item')}> Utility </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/terms-item', '/terms', '/privacy'].includes(manu) ? 'open' : ''}`}>
                                    <li className={manu === '/terms' ? 'active' : ''}><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                    <li className={manu === '/privacy' ? 'active' : ''}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setManu(manu === '/special-item' ? '' : '/special-item')}> Special </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'open' : ''}`}>
                                    <li className={manu === '/comingsoon' ? 'active' : ''}><Link to="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                    <li className={manu === '/maintenance' ? 'active' : ''}><Link to="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                    <li className={manu === '/error' ? 'active' : ''}><Link to="/error" className="sub-menu-item"> 404! Error</Link></li>
                                </ul> 
                            </li>
                        </ul>
                    </li>
            
                    <li className={manu === '/contactus' ? 'active' : ''}><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </header>

    
    </>
  )
}
