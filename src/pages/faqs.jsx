import React from 'react'
import { Link } from 'react-router-dom'

import hero from '../assets/images/hero/pages.jpg'

import Navbar from '../components/navbar'
import Faq from '../components/faq'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Faqs() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">FAQs</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-7 col-12">
                    <div className="section-title" id="tech">
                        <h4>Buying Product</h4>
                    </div>

                    <Faq/>

                    <div className="section-title mt-5" id="general">
                        <h4>General Questions</h4>
                    </div>

                    <Faq/>

                    <div className="section-title mt-5" id="payment">
                        <h4>Payments Questions</h4>
                    </div>

                    <Faq/>

                    <div className="section-title mt-5" id="support">
                        <h4>Support Questions</h4>
                    </div>

                    <Faq/>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    
    <ScrollToTop/>
    </>
  )
}
