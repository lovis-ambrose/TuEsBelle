import React from 'react'
import donate from '../assets/images/donate.png'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src={donate} className="img-fluid d-block mx-auto" alt=""/>
            </div>
            <div className="col-md-6 text-center">
                <div className="p-4 rounded shadow bg-white ms-lg-5">
                    <h4>Support Our Cause!</h4>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Donate via Mobile Money</h4>
                            <p className="card-text">
                                Use the following mobile money lines to make your contribution. Every donation makes a difference.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <strong>Airtel Money:</strong> +256759889056 (Miss. Namukwaya Esther)
                                </li>
                                <li className="mb-2">
                                    <strong>MTN Mobile Money:</strong> +256772250430 (Mrs. Sheebah Kakuba)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}
