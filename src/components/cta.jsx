import React from 'react'

import video from '../assets/images/video.mp4'

import '../../node_modules/tiny-slider/dist/tiny-slider.css'
export default function Cta() {

  return (
    <>
    <section className="cta-video-section position-relative">
        <video className="" loop autoPlay muted>
            <source src={video} type="video/mp4"/>
        </video>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-10">
                    <div className="position-relative z-1 p-4 rounded shadow bg-white">
                        <div className="tiny-single-item">
                            Some thing here is very nice <br />
                            Some thing here is very nice <br />
                            Some thing here is very nice <br />
                            Some thing here is very nice <br />
                            Some thing here is very nice <br />
                            Some thing here is very nice <br />
                        </div>

                        <i className="mdi mdi-format-quote-open text-primary position-absolute top-50 start-50 translate-middle z-n1 testi-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
