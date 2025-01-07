import React from 'react'
import volunteer from '../assets/images/volunteer.png'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src={volunteer} className="img-fluid d-block mx-auto" alt=""/>
            </div>
            <div className="col-md-6">
                <div className="p-4 rounded shadow bg-white ms-lg-5">
                    <h4>Join Our Cause!</h4>
                    <form className="mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Name :" required/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email <span className="text-danger">*</span></label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Email :" required/>
                                </div> 
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Contact <span className="text-danger">*</span></label>
                                    <input name="phone" id="phone" className="form-control" placeholder="phone number :" required/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Subject</label>
                                    <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Why U want to Join Us <span className="text-danger">*</span></label>
                                    <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-grid">
                                    <button type="submit" id="submit" name="send" className="btn btn-primary">Submit Request</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}
