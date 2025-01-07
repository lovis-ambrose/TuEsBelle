import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import bg1 from '../assets/images/hero/special.jpg'
import bg2 from '../assets/images/hero/2.jpg'
import bg3 from '../assets/images/hero/3.jpg'
import VideoOne from "./video-one";


export default function HomeBanner() {
    const images = [
        bg1,
        bg2,
        bg3,
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % images.length 
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);

  return (
    <section className="bg-half-260" id="home" style={{backgroundImage:`url(${images[currentImageIndex]})`}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row align-items-center mt-5">
                <div className="col-lg-7 col-md-8 order-md-1 order-2">
                    <div className="title-heading">
                        <h1 className="heading text-white title-dark fw-bold mb-4 text-capitalize">Fearfully and Wonderfully Made</h1>
                        <p className="para-desc text-white-50">
                          <i><b>"She is clothed with strength and dignity, and she laughs without fear of the future."</b></i> <span className="text-white">Proverbs 31:25</span>
                        </p>
                        
                        <div className="mt-4 pt-2">
                            <Link to="/volunteer" className="btn btn-primary me-1">Join Us</Link>
                            <Link to="/donate" className="btn btn-soft-primary">Make a Donation</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-4 order-md-2 order-1">
                   <VideoOne/>
                </div>
            </div>
        </div>
    </section>
  )
}
