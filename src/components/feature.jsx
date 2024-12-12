import React from 'react'
import { featureData } from '../data/data'
import { Link } from 'react-router-dom'

export default function Feature() {
  return (
    <>
        <div className="row">
            {featureData.slice(0,3).map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                        <div className="position-relative features shadow  text-center rounded p-4 pt-5">
                            <div className="position-relative d-flex justify-content-center">
                                <Icon className="fea icon-md text-primary z-1"/>
                                <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                            </div>

                            <div className="mt-4">
                                <Link to="/service-detail" className="h5 text-dark link-title">{item.title}</Link>
                                <p className="text-muted mt-3">{item.desc}</p>
                                <Link to="/service-detail" className="text-primary">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    </>
  )
}
