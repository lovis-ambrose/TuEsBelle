import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/data';

export default function Team() {
  return (
    <>
      {/* Founder Section */}
        <div className="row justify-content-center align-items-center mb-5">
            {teamData.slice(0, 1).map((item, index) => (
                <div
                    className="col-12 col-lg-4 d-flex d-flex justify-content-center mt-4 pt-2"
                    key={index}
                >
                <div className="card team team-primary bg-transparent text-center mb-5 w-100">
                    <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                    <img
                        src={item.image}
                        style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                        className="img-fluid"
                        alt=""
                    />
                    <ul className="list-unstyled team-social mb-0">
                        {item.social.map((el, i) => {
                        let Icon = el;
                        return (
                            <li className="mt-1" key={i}>
                            <Link to="#" className="btn btn-sm btn-pills btn-icon">
                                <Icon className="icons fea-social"></Icon>
                            </Link>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                    <div className="content bg-white mx-4 p-4 z-1 rounded shadow">
                    <Link to="" className="text-dark h5 mb-0 title">
                        {item.name}
                    </Link>
                    <h6 className="text-muted mb-0 mt-1 fw-normal">
                        {item.position}
                    </h6>
                    </div>
                </div>
            </div>
            ))}
        </div>


      {/* Board Members Section */}
      <div className="row align-items-center">
        {teamData.slice(1, 7).map((item, index) => (
          <div
            className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
            key={index + 1} // Offset index for unique keys
          >
            <div className="card team team-primary bg-transparent text-center mb-5">
              <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                <img
                  src={item.image}
                  style={{ height: '250px' }}
                  className="img-fluid"
                  alt=""
                />
                <ul className="list-unstyled team-social mb-0">
                  {item.social.map((el, i) => {
                    let Icon = el;
                    return (
                      <li className="mt-1" key={i}>
                        <Link
                          to="#"
                          className="btn btn-sm btn-pills btn-icon"
                        >
                          <Icon className="icons fea-social"></Icon>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="content bg-white mx-4 p-4 z-1 rounded shadow">
                <Link to="" className="text-dark h5 mb-0 title">
                  {item.name}
                </Link>
                <h6 className="text-muted mb-0 mt-1 fw-normal">
                  {item.position}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
