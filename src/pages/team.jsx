import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

import hero from '../assets/images/hero/pages.jpg'
import { teamData } from '../data/data'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Team() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Our Team Members</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Team</li>
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
                {teamData.map((item,index)=>{
                    return(
                        <div className="col-lg-3 col-md-6 col-12" key={index}>
                            <div className="card team team-primary bg-transparent text-center mb-5">
                                <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                    <img src={item.image} style={{height: '200px'}} className="img-fluid" alt=""/>

                                    <ul className="list-unstyled team-social mb-0">
                                        {item.social.map((el,index)=>{
                                            let Icon = el 
                                            return(
                                                <li className="mt-1" key={index}><Link to="#" className="btn btn-sm btn-pills btn-icon"><Icon className="icons fea-social"></Icon></Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="content bg-white mx-4 p-4 z-1 rounded shadow">
                                    <Link to="" className="text-dark h5 mb-0 title">{item.name}</Link>
                                    <h6 className="text-muted mb-0 fw-normal">{item.position}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <Footer/>
    
    <ScrollToTop/>
    </>
  )
}
