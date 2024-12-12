import React from 'react'
import { FiAirplay, FiArrowRightCircle, FiAward, FiLogIn, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Price() {
  return (
    <>
    <div className="row">
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="pricing bg-light rounded position-relative overflow-hidden shadow">
                <div className="price-header rounded-top p-4 pb-0">
                    <div className="position-relative features text-center mx-lg-4 px-md-1 my-4">
                        <div className="position-relative d-flex">
                            <FiLogIn className="fea icon-ex-md text-primary z-1"/>
                            <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                        </div>
                    </div>
                    
                    <h4 className="mb-0">Free</h4>
                </div>
                <div className="d-flex p-4">
                    <span className="h5 mb-0">$</span>
                    <span className="price h2 mb-0 ms-1">0.00</span>
                    <span className="h5 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                    <ul className="feature list-unstyled p-4 pt-0 mb-0">
                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                    </ul>
                    <div className="p-4 pt-0">
                        <Link to="#" className="btn btn-soft-primary w-100">Free Signup</Link>                                        
                    </div>
                </div>    
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="pricing bg-white rounded position-relative overflow-hidden shadow">
                <div className="price-header rounded-top p-4 pb-0">
                    <div className="position-relative features text-center mx-lg-4 px-md-1 my-4">
                        <div className="position-relative d-flex">
                            <FiAirplay className="fea icon-ex-md text-primary z-1"/>
                            <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                        </div>
                    </div>

                    <h4 className="mb-0">Standerd</h4>
                </div>
                <div className="d-flex p-4">
                    <span className="h5 mb-0">$</span>
                    <span className="price h2 mb-0 ms-1">19.99</span>
                    <span className="h5 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                    <ul className="feature list-unstyled p-4 pt-0 mb-0">
                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                    </ul>
                    <div className="p-4 pt-0">
                        <Link to="#" className="btn btn-soft-primary w-100">Buy Now</Link>                                        
                    </div>
                </div>    
            </div>
        </div>
        
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="pricing bg-primary bg-gradient text-white rounded position-relative overflow-hidden shadow">
                <div className="price-header rounded-top p-4 pb-0">
                    <div className="position-relative features text-center mx-lg-4 px-md-1 my-4">
                        <div className="position-relative d-flex">
                            <FiAward className="fea icon-ex-md text-primary z-1"/>
                            <div className="feature-icon bg-white position-absolute top-0 translate-middle"></div>
                        </div>
                    </div>

                    <h4 className="mb-0">Professional</h4>
                </div>
                <div className="d-flex p-4">
                    <span className="h5 mb-0">$</span>
                    <span className="price h2 mb-0 ms-1">99.99</span>
                    <span className="h5 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                    <ul className="feature list-unstyled p-4 pt-0 mb-0">
                        <li className="feature-list text-white-50"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>Full Access</li>
                        <li className="feature-list text-white-50 mt-2"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>Enhanced Security</li>
                        <li className="feature-list text-white-50 mt-2"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>Source Files</li>
                        <li className="feature-list text-white-50 mt-2"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>1 Domain Free</li>
                        <li className="feature-list text-white-50 mt-2"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>Free Appointments</li>
                        <li className="feature-list text-white-50 mt-2"><FiArrowRightCircle className="fea icon-sm text-white me-2"/>Free Installment</li>
                    </ul>
                    <div className="p-4 pt-0">
                        <Link to="#" className="btn btn-info w-100">Subscribe Now</Link>                                        
                    </div>
                </div>    
            </div>
        </div>
        
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="pricing bg-white rounded position-relative overflow-hidden shadow">
                <div className="price-header rounded-top p-4 pb-0">
                    <div className="position-relative features text-center mx-lg-4 px-md-1 my-4">
                        <div className="position-relative d-flex">
                            <FiStar className="fea icon-ex-md text-primary z-1"/>
                            <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                        </div>
                    </div>

                    <h4 className="mb-0">Plus</h4>
                </div>
                <div className="d-flex p-4">
                    <span className="h5 mb-0">$</span>
                    <span className="price h2 mb-0 ms-1">199.99</span>
                    <span className="h5 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                    <ul className="feature list-unstyled p-4 pt-0 mb-0">
                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>10 Domain Free</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                    </ul>
                    <div className="p-4 pt-0">
                        <Link to="#" className="btn btn-soft-primary w-100">Subscribe Now</Link>                                        
                    </div>
                </div>    
            </div>
        </div>
    </div>  
    </>
  )
}
