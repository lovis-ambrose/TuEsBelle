import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'
import { clientData } from '../data/data'

export default function Testimonial() {
  return (
    <>
     <Navbar/> 
     
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Testimonial</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Smilecare</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
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
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="row g-4">
                        {clientData.slice(0,3).map((item,index)=>{
                            return(
                                <div className="col-12" key={index}>
                                    <div className="position-relative overflow-hidden z-1 bg-white rounded shadow p-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mb-0">{item.tag}</h6>
            
                                            <ul className="list-unstyled mb-0 text-warning">
                                                {item.rate.map((el, index)=>{
                                                    return(
                                                        <li className="list-inline-item" key={index}><i className={el}></i></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
            
                                        <p className="text-muted fst-italic mt-2">" {item.desc} "</p>
            
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} className="avatar avatar-small rounded-pill shadow object-fit-cover" alt=""/>
                                            <div className="ms-2">
                                                <h6 className="text-dark small mb-0">{item.name}</h6>
                                                <small className="text-muted d-block">{item.position}</small>
                                            </div>
                                        </div>

                                        <i className="mdi mdi-format-quote-open text-primary position-absolute top-50 start-50 translate-middle z-n1 testi-icon"></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 mt-md-0">
                    <div className="row g-4">
                        {clientData.slice(3,6).map((item,index)=>{
                            return(
                                <div className="col-12" key={index}>
                                    <div className="position-relative overflow-hidden z-1 bg-white rounded shadow p-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mb-0">{item.tag}</h6>
            
                                            <ul className="list-unstyled mb-0 text-warning">
                                                {item.rate.map((el, index)=>{
                                                    return(
                                                        <li className="list-inline-item" key={index}><i className={el}></i></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
            
                                        <p className="text-muted fst-italic mt-2">" {item.desc} "</p>
            
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} className="avatar avatar-small rounded-pill shadow object-fit-cover" alt=""/>
                                            <div className="ms-2">
                                                <h6 className="text-dark small mb-0">{item.name}</h6>
                                                <small className="text-muted d-block">{item.position}</small>
                                            </div>
                                        </div>

                                        <i className="mdi mdi-format-quote-open text-primary position-absolute top-50 start-50 translate-middle z-n1 testi-icon"></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="col-lg-4 col-12 mt-4 mt-lg-0">
                    <div className="row g-4">
                        {clientData.slice(6,9).map((item,index)=>{
                            return(
                                <div className="col-lg-12 col-md-6" key={index}>
                                    <div className="position-relative overflow-hidden z-1 bg-white rounded shadow p-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mb-0">{item.tag}</h6>
            
                                            <ul className="list-unstyled mb-0 text-warning">
                                                {item.rate.map((el, index)=>{
                                                    return(
                                                        <li className="list-inline-item" key={index}><i className={el}></i></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
            
                                        <p className="text-muted fst-italic mt-2">" {item.desc} "</p>
            
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} className="avatar avatar-small rounded-pill shadow object-fit-cover" alt=""/>
                                            <div className="ms-2">
                                                <h6 className="text-dark small mb-0">{item.name}</h6>
                                                <small className="text-muted d-block">{item.position}</small>
                                            </div>
                                        </div>

                                        <i className="mdi mdi-format-quote-open text-primary position-absolute top-50 start-50 translate-middle z-n1 testi-icon"></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col mt-4">
                    <div className="text-center">
                        <Link to="" className="text-primary">See More <i className="mdi mdi-chevron-right"></i></Link>
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
