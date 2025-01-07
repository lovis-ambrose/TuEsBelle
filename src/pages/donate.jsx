import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import bg from '../assets/images/hero/pages.jpg'



export default function Terms() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Make a Contribution</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Donate</li>
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
            <div className="text-center mb-5">
                <h5 className="display-6">Support Our Mission</h5>
                <p className="text-muted">
                    Your generosity can make a significant difference in empowering women and their communities, fostering growth and resilience
                </p>
            </div>

            <div className="mb-5">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Donate via Mobile Money</h4>
                            <p className="card-text">
                                Use the following mobile money lines to make your contribution. Every donation makes a difference.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <strong>Airtel Money:</strong> +256759889056 (Miss. Namukwaya Esther)
                                </li>
                                <li className="mb-2">
                                    <strong>MTN Mobile Money:</strong> +256772250430 (Mrs. Sheebah Kakuba)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <p className="text-muted">
                    Thank you for your generosity. All donors will receive a receipt and regular updates on how your contributions are making a difference.
                </p>
            </div>
        </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
