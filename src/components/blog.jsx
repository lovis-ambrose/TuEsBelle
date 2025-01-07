import React from 'react'
import { Link } from 'react-router-dom'

import { blogData } from '../data/data'

export default function Blog() {
  return (
    <>
    <div className="row">
        {blogData.slice(0,3).map((item,index)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="blog position-relative overflow-hidden shadow rounded p-4">
                        <div className="position-relative">
                            <div className="blog-image position-relative overflow-hidden rounded shadow">
                                <img src={item.image} className="img-fluid" alt=""/>
                            </div>

                            <div className="position-absolute top-100 start-0 translate-middle-y ms-2">
                                <Link to="#" className="badge bg-primary">{item.tag}</Link>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link to={`/blog-detail/${item.id}/${item.url}`} className="text-dark title h5">{item.title}</Link>

                            <p className="text-muted my-2">{item.desc}</p>

                            <Link to={`/blog-detail/${item.id}/${item.url}`} className="text-dark read-more">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            )
        })}
    </div> 
    </>
  )
}
