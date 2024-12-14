import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Faq from '../components/faq'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'
import image from '../assets/images/hero/1.jpg'

import { servicesData } from '../data/data'

export default function ServiceDetail() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Service Detail</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Service Detail</li>
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
                <div className="col-lg-8 col-md-7">
                    <div className="card position-relative overflow-hidden">
                        <div className="card-img">
                            <img src={image} className="img-fluid rounded" alt=""/>
                            <div className="card-overlay" style={{opacity: '1'}}></div>
                        </div>

                        <div className="content p-4 position-absolute bottom-0 start-0">
                            <Link to="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">Branding Strategy</Link>

                            <div className="d-flex author align-items-center mt-3">
                                <p className="para-desc text-white-50 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                            </div>
                        </div>
                    </div>

                    <h5 className="mt-4">Data Analysis:</h5>
                    <p className="text-muted mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                    <h5 className="mt-4">Benefits:</h5>
                    <ul className="list-unstyled mt-3 mb-0">
                        <li className="mt-2"><Link to="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Deciding to purchase</Link></li>
                        <li className="mt-2"><Link to="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>List your space</Link></li>
                        <li className="mt-2"><Link to="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Landing an experience or adventure</Link></li>
                        <li className="mt-2"><Link to="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Top uses questions</Link></li>
                    </ul>

                    <h5 className="mt-4">FAQs:</h5>

                    <Faq/>
                </div>

                <div className="col-lg-4 col-md-5 col-12 mt-4 pt-2 mt-md-0 pt-md-0">
                    <div className="sticky-bar">
                        <div>
                            {servicesData.map((item,index)=>{
                                return(
                                    <Link to="/service-detail" className="bg-light rounded d-flex justify-content-between text-dark py-3 px-4 mt-2" key={index}>
                                        <span className="fw-semibold">{item.title}</span>
                                        <i className="mdi mdi-chevron-right align-middle"></i>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="bg-light rounded p-4 mt-2">
                            <h5>Get in touch !</h5>
                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label d-none fw-semibold">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label d-none fw-semibold">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                        </div> 
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label d-none fw-semibold">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
