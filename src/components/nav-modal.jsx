import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { FiSearch, FiSettings } from 'react-icons/fi'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { footerSocial } from '../data/data'
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-white.png'
import contact from '../assets/images/contact.png'

export default function NavModal({navDark}) {
    let [search, setSearch] = useState(false)
    let [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSearch(false);
        }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, []);

  return (
    <>
        <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
                <div className="dropdown" ref={dropdownRef}>
                        <button type="button" className="dropdown-toggle btn btn-sm p-0 border-0" onClick={()=>setSearch(!search)}>
                            <FiSearch className="fea icon-20 login-btn-primary"/>
                            <FiSearch className="fea icon-20 text-white login-btn-light"/>
                        </button>
                        
                    {search && 
                        <div className="dropdown-menu dd-menu dropdown-menu-end bg-white rounded border-0 mt-3 p-0 show" style={{width: '240px', right:'0'}}>
                            <div className="search-bar">
                                <div id="itemSearch" className="menu-search mb-0">
                                    <form role="search" method="get" id="searchItemform" className="searchform">
                                        <input type="text" className="form-control rounded border" name="s" id="searchItem" placeholder="Search..."/>
                                        <input type="submit" id="searchItemsubmit" value="Search"/>
                                        <FiSearch className="icons"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </li>

            <li className="list-inline-item ps-1 mb-0">
                <Link to="#" onClick={()=>setOpen(!open)}>
                    <div className="btn btn-sm btn-icon btn-pills btn-primary"><FiSettings className="fea icon-sm"/></div>
                </Link>
            </li>

            <li className="list-inline-item ps-1 mb-0">
                <Link to="" className="btn btn-sm btn-primary">Donate Us</Link>
            </li>
        </ul>

        <Offcanvas show={open} onHide={()=>setOpen(!open)} placement='end'>
            <Offcanvas.Header closeButton className="p-4 border-bottom">
                <Offcanvas.Title>
                    <h5 id="offcanvasRightLabel" className="mb-0">
                        <img src={logoDark} className="light-version" alt=""/>
                        <img src={logoLight} className="dark-version" alt=""/>
                    </h5>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-4">
                <div className="row">
                    <div className="col-12">
                        <img src={contact} className="img-fluid" alt=""/>
                        <form>
                            <div className="my-3 text-center">
                                <h6 className="text-uppercase mb-0 fw-semibold">Sign In</h6>
                            </div>
                        
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Your Email</label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="example@website.com"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold" htmlFor="loginpass">Password</label>
                                <input type="password" className="form-control" id="loginpass" placeholder="Password"/>
                            </div>
                        
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-label form-check-label text-muted" htmlFor="flexCheckDefault">Remember me</label>
                                    </div>
                                </div>
                                <span className="forgot-pass text-muted small mb-0"><Link to="/reset-password" className="text-muted">Forgot password ?</Link></span>
                            </div>
            
                            <button className="btn btn-primary w-100" type="submit">Sign in</button>
                            <div className="col-12 text-center mt-3">
                                <span><span className="text-muted me-2 small">Don't have an account ?</span> <Link to="/signup" className="text-dark fw-semibold small">Sign Up</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </Offcanvas.Body>
            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon mb-0">
                    {footerSocial.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <li className="list-inline-item me-2" key={index}><Link to={item.link} target="_blank" className="rounded"><Icon className="fea icon-sm align-middle" title="dribbble"></Icon></Link></li>
                        )
                    })}
                </ul>
            </div>
        </Offcanvas>
    </>
  )
}