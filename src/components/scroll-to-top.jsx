import React, { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ScrollToTop() {
    let [scroll, setScroll] = useState(false)

    useEffect(()=>{
        const scrollHandler = () =>{
            if(window.scrollY > 100){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll', scrollHandler)

        return()=>{
            window.removeEventListener('scroll', scrollHandler)
        }
    })

    const topFunction =()=>{
        window.scrollTo(0,0)
    }
  return (
    <>
    <Link to="#" onClick={()=>topFunction()} id="back-to-top" className={`back-to-top rounded fs-5  ${scroll ? 'd-block' : ''}`}><FiArrowUp className="fea icon-sm align-middle"/></Link>  
    </>
  )
}
