import React from 'react'
import { servicesData } from '../data/data'

export default function Feature() {
  return (
    <>
        <div className="row">
            {servicesData.slice(0,3).map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                        <div className="position-relative features shadow  text-center rounded p-4 pt-5">
                            <div className="position-relative d-flex justify-content-center">
                                <Icon className="fea icon-md text-primary z-1"/>
                                <div className="feature-icon bg-soft-primary position-absolute top-0 translate-middle"></div>
                            </div>

                            <div className="mt-4">
                                <h5 className="h5 text-dark link-title">{item.title}</h5>
                                <p className="text-muted mt-3">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    </>
  )
}
