import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Cta from '../components/cta'
import Team from '../components/team'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'
import AboutOne from '../components/about-one'
import AboutTwo from '../components/about-two'

export default function Aboutus() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">About Us</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

    <div className="position-relative">
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
        <div className="container">
            <AboutOne/>
        </div>
    </section>

    <section className="section">
        <div className="container">
        <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">What We Do</h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                            At Tu Es Belle Foundation, we are dedicated to empowering women and girls through education, skill-building, and mentorship. Rooted in faith and driven by purpose, we inspire confidence, creativity, and resilience to build a more just and equitable society.
                        </p>
                    </div>
                </div>
            </div>
            <AboutTwo /> 
        </div>
    </section>

    <Cta/>

    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Board Of Directors</h4>
                        <p className="text-muted para-desc mx-auto mb-0">The Tu Es Belle foundation is a non profit organisation that strives to improve the society by reminding women of their worth.</p>
                    </div>
                </div>
            </div>
            <Team/>
        </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
