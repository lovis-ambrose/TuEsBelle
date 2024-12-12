import React from 'react'

import SinglePageNavbar from '../components/single-page-navbar'
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


export default function Onepage() {
  return (
    <>
    <SinglePageNavbar/>

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
    </section>

    <section className="section bg-light" id="causes">
        <div className="container">
           <Causes/>
        </div>
    </section>
    <Cta/>

    <section className="section" id="priorities">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">We Have Funded <span className="text-primary">150 Charity Projects</span> for <br/> 10M People Around The World.</h4>
                        <p className="text-muted para-desc mx-auto mb-0">The Smilecare is a non profit organisation that strives to eliminate hunger by implementing the Mid Day Meal Programme.</p>
                    </div>
                </div>
            </div>

            <Feature/>
        </div>
    </section>

    <section className="section bg-light" id="volunteers">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Our Volunteers</h4>
                        <p className="text-muted para-desc mx-auto mb-0">The Smilecare is a non profit organisation that strives to eliminate hunger by implementing the Mid Day Meal Programme.</p>
                    </div>
                </div>
            </div>

            <Team/>
        </div>
    </section>

    <section className="section" id="blogs">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Blog Or News</h4>
                        <p className="text-muted para-desc mx-auto mb-0">The Smilecare is a non profit organisation that strives to eliminate hunger by implementing the Mid Day Meal Programme.</p>
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
