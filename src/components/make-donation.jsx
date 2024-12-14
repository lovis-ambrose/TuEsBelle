import React from 'react'
import { Link } from 'react-router-dom'

export default function MakeDonation() {
  return (
    <>
    <div className="p-4 rounded shadow position-relative bg-white">
        <div className="section-title">
            <h4 className="title mb-3">Make a Donation</h4>
            <p className="mb-0 text-muted">
                Donate today—empower women, advance social justice!
            </p>
        </div>

        <form className="mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label fw-semibold" htmlFor="name">Your Name : </label>
                        <input name="name" id="name" type="text" className="form-control" placeholder="Your Name :"/>
                    </div>
                </div>                               

                <div className="col-md-6 col-12">
                    <div className="mb-3">
                        <label className="form-label fw-semibold" htmlFor="email"> Your Mail : </label>
                        <input name="email" id="email" type="email" className="form-control" placeholder="Your Mail :"/>
                    </div> 
                </div>  

                <div className="col-md-6 col-12">
                    <div className="mb-3">
                        <label className="form-label fw-semibold" htmlFor="number2">Phone No. : </label>
                        <input name="number" type="number" className="form-control" id="number2" placeholder="Phone :"/>
                    </div> 
                </div> 

                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label fw-semibold">I Want to Donate for</label>
                        <select className="form-select form-control" name="item_name">
                            <option value="Donate For Food">select reason</option>
                            <option value="Donate For Food">Rape victims</option>
                            <option value="Food For Orphan">Food For Orphans</option>
                            <option value="Home For Homeless">Home For Homeless</option>
                            <option value="Holyday Gifts In Kind">School drops</option>
                            <option value="For clean Water in Africa">Oppressed women</option>
                            <option value="Health and Rights">Single mums/Teen mums</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <label className="form-label fw-semibold">How much do you want to donate ?</label>
                    <div className="mb-3">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">$</span>
                            <input type="number" className="form-control" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required/>
                        </div>
                    </div>
                </div>                                                                          

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the <Link to="#" className="text-primary">Terms and Conditions</Link>.</label>
                    </div>
                </div>                                    

                <div className="col-12 mt-3">
                    <button type="submit" id="donatefund" name="send" className="btn btn-primary">Donate Us</button>
                </div>
            </div>
        </form>
    </div> 
    </>
  )
}
