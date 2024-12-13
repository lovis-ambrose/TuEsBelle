import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../assets/images/hero/2.jpg'
import logo from '../assets/images/logo192.png'


export default function Signup() {
  return (
    <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxWidth:'400px'}}>
                            <form>
                                <Link to="/"><img src={logo} width={'70px'} className="mb-4 d-block mx-auto" alt=""/></Link>
                                <h6 className="mb-3 text-uppercase text-center fw-semibold">Register your account</h6>
                            
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name</label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Calvin Carlo"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email</label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="example@website.com"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold" htmlFor="loginpass">Password</label>
                                    <input type="password" className="form-control" id="loginpass" placeholder="Password"/>
                                </div>
                            
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-label form-check-label text-muted" htmlFor="flexCheckDefault">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted small me-2">Already have an account ? </span> <Link to="/login" className="text-dark fw-semibold small">Sign in</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
