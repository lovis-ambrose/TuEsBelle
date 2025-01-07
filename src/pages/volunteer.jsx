import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Faq from '../components/faq'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Price from '../components/price'

import hero from '../assets/images/hero/pages.jpg'

export default function Pricing() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Pricing Plans</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Pricing</li>
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
            <Price/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="mb-4 title">FAQs</h4>
                        <p className="para-desc mx-auto text-muted">The Tu Es Belle is a non profit organisation that strives to eliminate hunger by implementing the Mid Day Meal Programme.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-9 mt-4 pt-2">
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
