import React from 'react'

import Navbar from '../components/navbar'
import Feature from '../components/feature'
import AboutOne from '../components/about-one'
import Blog from '../components/blog'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import HomeBanner from '../components/home-banner'
import MakeDonation from '../components/make-donation'
import Causes from '../components/causes'
import Cta from '../components/cta'
import Team from '../components/team'

export default function Index() {
  return (
    <>
    <Navbar/>
    
    <HomeBanner/>

    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 order-1 order-md-2">
                    <div className="features-absolute">
                        <MakeDonation/>
                    </div>
                </div>

                <div className="col-lg-8 col-md-6 order-2 order-md-1">
                    <AboutOne/>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
           <Causes/>
        </div>
    </section>

    <Cta/>

    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Empowering Change: <span className="text-primary">Transformative Services </span> <br /> for Women and Girls</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Tu Es Belle Foundation empowers women and girls through education, skills development, and support services, fostering confidence, independence, and social justice to create a world where women thrive with dignity and purpose.</p>
                    </div>
                </div>
            </div>

            <Feature/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Our Volunteers</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Volunteers at Tu Es Belle Foundation play a vital role in empowering women and girls, supporting education, providing mentorship, and contributing to social justice initiatives. Join us in making a lasting impact.</p>
                    </div>
                </div>
            </div>

            <Team/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Blog Or News</h4>
                        <p className="text-muted para-desc mx-auto mb-0">The Tu Es Belle foundation is a non profit organisation that strives to improve the society by reminding women of their worth.</p>
                    </div>
                </div>
            </div>

            <Blog/>
        </div>
    </section>
    
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
