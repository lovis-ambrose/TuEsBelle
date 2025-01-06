import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import bg from '../assets/images/hero/pages.jpg'



export default function Terms() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Terms & Conditions</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Terms</li>
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
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="card bg-light shadow border-0 rounded">
                        <div className="card-body">
                            <h5 className="card-title">Introduction:</h5>
                            <p className="text-muted">
                                Welcome to Tu Es Belle Foundation. By accessing or using our services, programs, or website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before engaging with us.
                            </p>

                            <h5 className="card-title">1. General</h5>
                            <p className="text-muted">
                                1.1. These terms apply to all visitors, users, and participants of Tu Es Belle Foundation’s services and activities.
                            </p>
                            <p className="text-muted">
                                1.2. The foundation reserves the right to modify these terms at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the updated terms.
                            </p>
                            
                            <h5 className="card-title">2. Use of Services</h5>
                            <p className="text-muted">
                                2.1. Participation in our programs is voluntary and subject to eligibility criteria.
                            </p>
                            <p className="text-muted">
                                2.2. Any misuse of the foundation’s resources, facilities, or services may result in termination of participation.
                            </p>
                            <p className="text-muted">
                                2.3. Content shared during programs or events is for personal development only and should not be reproduced or distributed without permission.
                            </p>
                        

                            <h5 className="card-title">3. Products and Donations</h5>
                            <p className="text-muted">
                                3.1. All proceeds from products sold by Tu Es Belle Foundation directly support our empowerment programs.
                            </p>
                            <p className="text-muted">
                                3.2. Donations made to the foundation are non-refundable unless explicitly stated otherwise.
                            </p>
                            <p className="text-muted">
                                3.3. The foundation is not responsible for third-party product delivery issues if purchased through external platforms.
                            </p>

                            <h5 className="card-title">4. Intellectual Property</h5>
                            <p className="text-muted">
                                4.1. All content, including logos, designs, training materials, and media, is the property of Tu Es Belle Foundation and protected by copyright laws.
                            </p>
                            <p className="text-muted">
                                4.2. Unauthorized reproduction, distribution, or modification of the foundation’s content is prohibited.
                            </p>

                            <h5 className="card-title">5. Privacy Policy</h5>
                            <p className="text-muted">
                                5.1. Personal information collected during program registrations or purchases is handled in accordance with our Privacy Policy.
                            </p>
                            <p className="text-muted">
                                5.2. We will not share personal information with third parties without consent, except where required by law.
                            </p>

                            <h5 className="card-title">6. Code of Conduct</h5>
                            <p className="text-muted">
                                6.1. Participants are expected to uphold respectful behavior toward others during events, training, and online interactions.
                            </p>
                            <p className="text-muted">
                                6.2. Harassment, discrimination, or disruptive behavior will not be tolerated and may result in removal from programs or events.
                            </p>

                            <h5 className="card-title">7. Limitation of Liability</h5>
                            <p className="text-muted">
                                7.1. The foundation is not liable for personal losses, injuries, or damages incurred during participation in programs, events, or use of products.
                            </p>
                            <p className="text-muted">
                                7.2. Participants are responsible for ensuring their physical and mental well-being while engaging in activities organized by the foundation.
                            </p>

                            <h5 className="card-title">8. Termination</h5>
                            <p className="text-muted">
                                8.1. Tu Es Belle Foundation reserves the right to terminate access to its services, programs, or events for violations of these terms and conditions.
                            </p>
                            <p className="text-muted">
                                8.2. Upon termination, users are still bound by the applicable provisions of these terms, including intellectual property rights and limitations of liability.
                            </p>

                            <h5 className="card-title">9. Governing Law</h5>
                            <p className="text-muted">
                                9.1. These terms and conditions are governed by and construed in accordance with the laws of Uganda.
                            </p>
                            <p className="text-muted">
                                9.2. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in Uganda.
                            </p>

                            <h5 className="card-title">10. Contact Us</h5>
                            <p className="text-muted">
                                10.1. For questions or concerns about these terms and conditions, please contact Us<br />
                            </p>
                            
                            <div className="mt-3">
                                <Link to="#" className="btn btn-primary mt-2 me-2">Accept</Link>
                                <Link to="#" className="btn btn-outline-primary mt-2">Decline</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
