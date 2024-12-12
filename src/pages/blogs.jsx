import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'

import { blogData } from '../data/data'

export default function Blogs() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{ backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Latest Articles</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Smilecare</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div className="position-relative">
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
        <div className="container">
            <div className="row g-4">
                {blogData.map((item,index)=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="blog position-relative overflow-hidden shadow rounded p-4">
                                <div className="position-relative">
                                    <div className="blog-image position-relative overflow-hidden rounded shadow">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                    </div>

                                    <div className="position-absolute top-100 start-0 translate-middle-y ms-2">
                                        <Link to="" className="badge bg-primary">{item.tag}</Link>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link to={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                    <p className="text-muted my-2">{item.desc}</p>

                                    <Link to={`/blog-detail/${item.id}`} className="text-dark read-more">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true"><i className="mdi mdi-chevron-left align-middle fs-6"></i></span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true"><i className="mdi mdi-chevron-right align-middle fs-6"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
