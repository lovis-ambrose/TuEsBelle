import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import bg from '../assets/images/hero/pages.jpg'

export default function Contactus() {
  return (
    <>
    <Navbar/>
    
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Contact Us</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Smilecare</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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

    <section className="section pb-0">
        <Contact/>
        <div className="container-fluid mt-100 mt-60">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="card map border-0">
                        <div className="card-body p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen title="Smilecare"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
