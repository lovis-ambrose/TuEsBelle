import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import bg1 from '../assets/images/hero/1.jpg'
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
                        <h1 className="heading text-white title-dark fw-bold mb-4 text-capitalize">Give a Helping Hand <br/> for Children</h1>
                        <p className="para-desc text-white-50">We value every human life placed in our hands and constantly work towards meeting the expectations of our patients.</p>
                        
                        <div className="mt-4 pt-2">
                            <Link to="#" className="btn btn-primary me-1">Enroll Today</Link>
                            <Link to="#" className="btn btn-soft-primary">Make a Donation</Link>
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