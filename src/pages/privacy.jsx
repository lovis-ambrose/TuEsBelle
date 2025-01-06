import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

import hero from '../assets/images/hero/pages.jpg'

import { tearmsData } from '../data/data'
import { FiArrowRight } from 'react-icons/fi'

export default function Privacy() {
  return (
    <>
        <Navbar/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${hero})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Privacy Policy</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Tu Es Belle</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
                                <h5 className="card-title">Effective Date: 1st January 2025</h5>
                                <h5 className="card-title">Overview</h5>
                                <p className="text-muted">
                                    Tu Es Belle Foundation is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with us, including through our website, programs, and services. By engaging with Tu Es Belle Foundation, you agree to the practices described in this policy.
                                </p>
                                
                                <h5 className="card-title">1. Information We Collect</h5>
                                <p className="text-muted">
                                    We may collect the following types of personal information:
                                </p>
                                <p className="text-muted">
                                    1.1 Personal Information: Name, email address, phone number, and other contact details provided during program registrations, donations, or product purchases.
                                </p>
                                <p className="text-muted">
                                    1.2 Usage Data: Information about how you use our website, including IP address, browser type, pages visited, and interaction with our content.
                                </p>
                                <p className="text-muted">
                                    1.3 Financial Information: Payment details for donations or purchases, processed securely through third-party payment platforms.
                                </p>
                                <p className="text-muted">
                                    1.4 Sensitive Information: When necessary, details shared during counseling sessions or empowerment programs.
                                </p>
    
                                <h5 className="card-title mt-3">2. How We Use Your Information</h5>
                                <p className="text-muted">
                                    We use your personal information for the following purposes:
                                </p>
                                <p className="text-muted">
                                    2.1 To manage registrations, donations, and product orders.
                                </p>
                                <p className="text-muted">
                                    2.2 To provide and improve our services, training programs, and events.
                                </p>
                                <p className="text-muted">
                                    2.3 To communicate with you regarding updates, events, and initiatives.
                                </p>
                                <p className="text-muted">
                                    2.4 To ensure the safety and security of program participants.
                                </p>
                                <p className="text-muted">
                                    2.5 To comply with legal obligations or respond to lawful requests from authorities.
                                </p>

                                <h5 className="card-title mt-3">3. How We Protect Your Information</h5>
                                <p className="text-muted">
                                    3.1 We implement security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
                                </p>
                                <p className="text-muted">
                                    2.1 To manage registrations, donations, and product orders.
                                </p>
                                <p className="text-muted">
                                    3.2 Sensitive information, such as payment details, is processed securely through trusted third-party payment platforms.
                                </p>
                                <p className="text-muted">
                                    3.3 Access to personal information is restricted to authorized personnel who require it for legitimate purposes.
                                </p>

                                <h5 className="card-title mt-3">4. Sharing Your Information</h5>
                                <p className="text-muted">
                                    4.1 We do not sell, trade, or rent your personal information to third parties.
                                </p>
                                <p className="text-muted">
                                    4.2 We may share your information with trusted service providers who assist in delivering our services, such as payment processors or email platforms.
                                </p>
                                <p className="text-muted">
                                    4.3 In cases of legal requirements, we may disclose your information to authorities or comply with court orders.
                                </p>

                                <h5 className="card-title mt-3">5. Your Rights</h5>
                                <p className="text-muted">
                                    You have the right to:
                                </p>
                                <p className="text-muted">
                                    5.1 Access and review the personal information we hold about you.
                                </p>
                                <p className="text-muted">
                                    5.2 Request corrections or updates to your personal information.
                                </p>
                                <p className="text-muted">
                                    5.3 Withdraw consent for marketing communications at any time.
                                </p>
                                <p className="text-muted">
                                    5.4 Request deletion of your personal information, subject to legal and operational constraints.
                                </p>

                                <h5 className="card-title mt-3">6. Cookies and Tracking</h5>
                                <p className="text-muted">
                                    6.1 Our website may use cookies to improve your browsing experience and gather data on site usage.
                                </p>
                                <p className="text-muted">
                                    6.2 You can manage cookie preferences through your browser settings. Disabling cookies may affect website functionality.
                                </p>

                                <h5 className="card-title mt-3">7. Retention of Information</h5>
                                <p className="text-muted">
                                    7.1 We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                                </p>
                                <p className="text-muted">
                                    7.2 When no longer needed, personal information is securely deleted or anonymized.
                                </p>

                                <h5 className="card-title mt-3">8. Third-Party Links</h5>
                                <p className="text-muted">
                                    Our website or communications may include links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                                </p>

                                <h5 className="card-title mt-3">9. Changes to This Policy</h5>
                                <p className="text-muted">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the revised policy.
                                </p>

                                <h5 className="card-title mt-3">10. Contact Us</h5>
                                <p className="text-muted">
                                    If you have questions, concerns, or requests related to this Privacy Policy, please contact us.
                                </p>
    
                                <Link to="#" className="btn btn-primary">Print</Link>
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
