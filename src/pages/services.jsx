import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

import hero from '../assets/images/hero/pages.jpg'
import { servicesData } from '../data/data'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Services() {
  return (
    <>
    <Navbar/>  

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">What we do</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            <div className="row g-4">
                {servicesData.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="position-relative features text-center rounded shadow p-4 pt-5">
                                <div className="position-relative d-flex justify-content-center">
                                    <Icon className="fea icon-md text-primary z-1"/>
                                    <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                                </div>

                                <div className="mt-4">
                                    <h5 className="h5 text-dark link-title">{item.title}</h5>
                                    <p className="text-muted mt-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <Footer/>
    
    <ScrollToTop/>
    </>
  )
}
