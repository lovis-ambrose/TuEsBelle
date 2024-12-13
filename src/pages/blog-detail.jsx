import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from '../components/navbar'
import BlogSidebars from '../components/blog-sidebar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'
import client1 from '../assets/images/team/1.jpg'
import client2 from '../assets/images/team/2.jpg'
import client3 from '../assets/images/team/3.jpg'
import blog from '../assets/images/blog/1.jpg'

import { blogData } from '../data/data'

export default function BlogDetail() {

    let params = useParams();
    let id = params.id

    let data = blogData.find((item)=>item.id === parseInt(id))

  return (
    <>
    <Navbar/>  

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <span className="badge bg-primary">{data?.tag ? data?.tag : 'Tu Es Belle'}</span>
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">{data?.title ? data?.title : 'Utilizing mobile technology in the field'}</h5>

                        <ul className="list-inline text-center mb-0">
                            <li className="list-inline-item mx-4 mt-4">
                                <span className="text-white-50 d-block">Author</span>
                                <Link to="#" className="text-white title-dark">Tu Es Belle</Link>
                            </li>

                            <li className="list-inline-item mx-4 mt-4">
                                <span className="text-white-50 d-block">Date</span>
                                <span className="text-white title-dark">{data?.date ? data?.date : '19th June 2024'}</span>
                            </li>

                            <li className="list-inline-item mx-4 mt-4">
                                <span className="text-white-50 d-block">Read Time</span>
                                <span className="text-white title-dark">5 min read</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            <div className="row">
                <div className="col-lg-8 col-md-7">
                    <div className="card border-0 shadow rounded overflow-hidden">
                        <img src={data?.image ? data?.image : blog} className="img-fluid" alt=""/>

                        <div className="card-body">
                            <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        
                            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Tu Es Belle Template</small></blockquote>
                        
                            <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        
                            <Link to="#" className="badge badge-link bg-primary me-1">Minimal</Link>
                            <Link to="#" className="badge badge-link bg-primary me-1">Interior</Link>
                            <Link to="#" className="badge badge-link bg-primary me-1">Furniture</Link>
                        </div>
                    </div>

                    <div className="card shadow rounded border-0 mt-4">
                        <div className="card-body">
                            <h5 className="card-title mb-0">Comments :</h5>

                            <ul className="media-list list-unstyled mb-0">
                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" href="#">
                                                <img src={client1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                                <small className="text-muted">13th March 2024 at 01:00 pm</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>

                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="#">
                                                <img src={client2} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                                <small className="text-muted">5th May 2024 at 10:00 am</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>
                                
                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="#">
                                                <img src={client3} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                                <small className="text-muted">19th June 2024 at 09:00 pm</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>

                                    <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                                        <li className="mt-4">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <Link className="pe-3" to="#">
                                                        <img src={client1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                                    </Link>
                                                    <div className="commentor-detail">
                                                        <h6 className="mb-0"><Link to="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                                        <small className="text-muted">20th June 2024 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card shadow rounded mt-4">
                        <div className="card-body">
                            <h5 className="card-title mb-0">Leave A Comment :</h5>

                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Comment</label>
                                            <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name <span className="text-danger">*</span></label>
                                            <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="send d-grid">
                                            <button type="submit" className="btn btn-pills btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-5 col-12 mt-4 pt-2 mt-md-0 pt-md-0">
                    <BlogSidebars/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
