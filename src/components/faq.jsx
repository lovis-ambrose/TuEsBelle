import React,{useState} from 'react'
import { faqData } from '../data/data'

export default function Faq() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <div className="accordion mt-3" id="buyingquestion">
        {faqData.map((item,index)=>{
            return(
                <div className="accordion-item rounded shadow mt-2" key={index}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button border-0 bg-white shadow ${activeTab === item.id ? '' : 'collapsed'}`} onClick={()=>setActiveTab(item.id)}>
                            {item.title}
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse border-0 collapse  ${activeTab === item.id ? 'show' : ''}`} aria-labelledby="headingOne"
                        data-bs-parent="#buyingquestion">
                        <div className="accordion-body text-muted">
                            {item.desc}
                        </div>
                    </div>
                </div>
            )
        })}
    </div> 
    </>
  )
}
