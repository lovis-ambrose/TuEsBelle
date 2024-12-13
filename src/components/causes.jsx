import React from 'react'
import { causesData } from '../data/data'
import { Link } from 'react-router-dom'

export default function Causes() {
  return (
    <>
      <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Popular Causes</h4>
                        <p className="text-muted para-desc mx-auto mb-4">The Tu Es Belle is a non profit organisation that strives to eliminate hunger by implementing the Mid Day Meal Programme.</p>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {causesData.map((item,index)=>{
                    return(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="position-relative rounded bg-white shadow overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="bg-overlay bg-linear-gradient-2"></div>
                                    <div className="position-absolute bottom-0 p-4">
                                        <Link to="" className="text-white title-dark fw-semibold link-title">Donate Now <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="content p-4">
                                    <h5><Link to="" className="text-dark link-title">{item.title}</Link></h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                    <div className="progress-box mt-5">
                                        <div className="progress rounded" style={{height: '8px'}}>
                                            <div className="progress-bar position-relative bg-primary rounded" style={{width:'60%'}}>
                                                <div className="progress-value d-block text-dark h6 mb-0">Raised 60% of $10000</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <h6 className="text-muted mb-0">$ 6000</h6>
                                        <h6 className="text-muted mb-0">$ 10000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> 
    </>
  )
}
