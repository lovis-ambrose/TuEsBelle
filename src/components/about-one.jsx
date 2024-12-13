import React from 'react'
import about1 from '../assets/images/about/1.jpg'
import about2 from '../assets/images/about/2.jpg'

import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

export default function AboutOne() {
  return (
    <>
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
                <div className="position-relative">
                    <div className="me-4">
                        <img src={about1} className="img-fluid rounded shadow" alt=""/>
                    </div>
                    
                    <div className="position-absolute end-0 top-50">
                        <div className="position-relative overflow-hidden rounded shadow">
                            <img src={about2} className="img-fluid avatar avatar-xl-large" alt=""/>
                            <div className="bg-overlay bg-primary opacity-75"></div>

                            <div className="position-absolute top-50 start-50 translate-middle">
                                <div className="counter-box text-center">
                                    <h2 className="fw-bold mb-0 text-white"><CountUp end={100}/>M<sup>+</sup></h2>
                                    <p className="counter-head small fw-semibold text-white mb-0">people inspired, empowering women, transforming society.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="section-title">
                    <h6 className="fw-normal text-primary">ABOUT US</h6>
                    <h4 className="title mb-4">BACKGROUND</h4>

                    <p className="text-muted mb-0">
                        From my favorite quote to summarize it all, <b><i>“To inspire people don’t show them your super
                        powers, show them theirs”</i></b> by <b>Alexandra den Heijer.</b> And just like that The HOLY SPIRIT brought the vision.
                    </p>
                
                    <div className="mt-4">
                        <Link to="/aboutus" className="btn btn-primary">Read More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
