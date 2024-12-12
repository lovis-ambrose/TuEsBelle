import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { recentPost, tagCloud } from '../data/data'

export default function BlogSidebars() {
  return (
    <>
    <div className="card bg-white p-4 rounded shadow sticky-bar">
        <div>
            <h6 className="pt-2 pb-2 bg-light rounded text-center">Search</h6>

            <div className="search-bar mt-4">
                <div id="itemSearch" className="menu-search mb-0">
                    <form role="search" method="get" id="searchItemform" className="searchform">
                        <input type="text" className="form-control rounded border" name="s" id="searchItem" placeholder="Search..."/>
                        <input type="submit" id="searchItemsubmit" value="Search"/>
                        <FiSearch className="icons"/>
                    </form>
                </div>
            </div>
        </div>

        <div className="mt-4 pt-2">
            <h6 className="pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
            <div className="mt-4">
                {recentPost.map((item,index)=>{
                    return(
                        <div className="blog blog-primary d-flex align-items-center mt-3" key={index}>
                            <img src={item.image} className="avatar avatar-small rounded" style={{width: 'auto'}} alt=""/>
                            <div className="flex-1 ms-3">
                                <Link to="" className="d-block title text-dark fw-medium">{item.title}</Link>
                                <span className="text-muted small">{item.date}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="mt-4 pt-2 text-center">
            <h6 className="pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
            <ul className="tagcloud list-unstyled mt-4">
                {tagCloud.map((item,index)=>{
                    return(
                        <li className="d-inline-flex m-1" key={index}><Link to="#" className="rounded fw-medium text-dark py-1 px-2">{item}</Link></li>
                    )
                })}
            </ul>
        </div>
    </div>  
    </>
  )
}
