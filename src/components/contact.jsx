import React from 'react'
import contact from '../assets/images/contact.png'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src={contact} className="img-fluid d-block mx-auto" alt=""/>
            </div>
            <div className="col-md-6">
                <div className="p-4 rounded shadow bg-white ms-lg-5">
                    <h4>Get in touch !</h4>
                    <form className="mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email <span className="text-danger">*</span></label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                </div> 
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Subject</label>
                                    <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Comments <span className="text-danger">*</span></label>
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

    <div className="container mt-100 mt-60">
        <div className="row">
            <div className="col-md-4">
                <div className="position-relative features text-center mx-lg-4 px-md-1">
                    <div className="position-relative d-flex justify-content-center">
                        <FiPhone className="fea icon-md text-primary z-1"/>
                        <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                    </div>

                    <div className="mt-4">
                        <h5 className="mb-3">Phone</h5>
                        <p className="text-muted">Start working with Smilecare that can provide everything</p>
                        <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-5 pt-2 mt-md-0 pt-md-0">
                <div className="position-relative features text-center mx-lg-4 px-md-1">
                    <div className="position-relative d-flex justify-content-center">
                        <FiMail className="fea icon-md text-primary z-1"/>
                        <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                    </div>

                    <div className="mt-4">
                        <h5 className="mb-3">Email</h5>
                        <p className="text-muted">Start working with Smilecare that can provide everything</p>
                        <Link to="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-5 pt-2 mt-md-0 pt-md-0">
                <div className="position-relative features text-center mx-lg-4 px-md-1">
                    <div className="position-relative d-flex justify-content-center">
                        <FiMapPin className="fea icon-md text-primary z-1"/>
                        <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                    </div>

                    <div className="mt-4">
                        <h5 className="mb-3">Location</h5>
                        <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                        <Link to="" className="text-primary">View on Google map</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}
