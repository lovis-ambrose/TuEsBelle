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
import team1 from '../assets/images/team/Esther.jpeg'


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
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">{data?.title ? data?.title : 'Message from the Founder.'}</h5>

                        <ul className="list-inline text-center mb-0">
                            <li className="list-inline-item mx-4 mt-4">
                                <span className="text-white-50 d-block">Author</span>
                                <Link to="#" className="text-white title-dark">Miss. Namukwaya Esther Yawe Ntwatwa</Link>
                            </li>

                            <li className="list-inline-item mx-4 mt-4">
                                <span className="text-white-50 d-block">Date</span>
                                <span className="text-white title-dark">{data?.date ? data?.date : '2nd January, 2025'}</span>
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
                        <li className="breadcrumb-item active" aria-current="page">Founder's Message</li>
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
                        <img src={data?.image ? data?.image : team1} className="img-fluid" alt=""/>
                        <caption className='text-center'>Image of Miss. Namukwaya Esther Yawe Ntwatwa, Founder of Tu Es Belle Foundation</caption>

                        <div className="card-body">
                            <p className="text-muted">
                                Miss. Esther is a self published author, humanitarian activist and a health care administrator.
                            </p>
                            <p className="text-muted">
                                Growing up as a child there was always a thymos for a-lot of things happening that I didn’t have
                                the power to change. And was graced with an empowerment from my father and brother who
                                strongly believed in the individuality of women and always gave me a voice to speak up. With a
                                good example of my mother who for one was not only God-fearing but also empowered me in all
                                aspects. I vividly remember her getting involved in all of activities. Giving away the little we also
                                heard while echoing the words "anyone can make a difference in anyone’s life";
                            </p>

                            <p className="text-muted">
                                And growing up in school I knew I wanted to make a difference in anyway I can. And what better
                                way to explain it in another favorite quote of mine.
                            </p>
                        
                            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i>
                             Give me an educated mother and I will give you an educated nation.
                            <small className="d-block text-muted mt-2">- Napoleon</small></blockquote>
                        
                            <p className="text-muted">
                                That statement is enough to prove the importance of female education and
                                accreditation. Which is the power that all women need to access.
                            </p>

                            <p className="text-muted">
                                If the women are uneducated then the nation is at stake . Because the opportunity to enrich the
                                society, mold the children and influence the decisions on men is disrupted.
                            </p>

                            <p className="text-muted">
                                Skills and strong sense of identity and self worthy are put on hold because of that. Which is why
                                Tu Es Belle is here to create aspiration by fighting inequality, equipping women with skills not only financial, but mentally, spiritually
                                and emotionally.
                            </p>
                        
                            {/* <Link to="#" className="badge badge-link bg-primary me-1">Minimal</Link>
                            <Link to="#" className="badge badge-link bg-primary me-1">Interior</Link>
                            <Link to="#" className="badge badge-link bg-primary me-1">Furniture</Link> */}
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
                                                <small className="text-muted">5th January 2025 at 01:00 pm</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">"Your story is truly inspiring, Miss Esther! The influence of your father, brother, and mother clearly played a significant role in shaping your vision for empowering women. It's amazing to see how you've turned those early lessons into a mission for change. Tu Es Belle is such a beautiful initiative—thank you for championing equality and uplifting women in every way possible!"</p>
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
                                                <small className="text-muted">5th January 2024 at 10:00 am</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">"The quote about an educated mother is so powerful. Thank you for highlighting the importance of female education and its impact on communities!"</p>
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
                                                <small className="text-muted">4th January 2025 at 09:00 pm</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted fst-italic p-3 bg-light rounded">"Your reflections on your mother's generosity and words are so touching—'anyone can make a difference in anyone’s life' is such a powerful statement. It's clear that you've carried that philosophy forward in your own life through your activism and work. Thank you for being a beacon of hope and inspiration!"</p>
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
                                                        <small className="text-muted">4th January 2024 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">"The point you made about uneducated women putting their sense of identity and worth on hold is so profound. It’s heartbreaking but true. Thank you for shedding light on this and working towards a world where every woman recognizes her value and has the tools to thrive. Your work is inspiring and much needed!"</p>
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
                                            <label className="form-label">Your Comment</label> <span className="text-danger">*</span>
                                            <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name <span className="text-danger">*</span></label>
                                            <input id="name" name="name" type="text" placeholder="Name" className="form-control" required/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input id="email" type="email" placeholder="Email" name="email" className="form-control" required/>
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
