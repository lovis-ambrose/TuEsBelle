import React, { useState } from 'react';
import { faqData } from '../data/data';

export default function Faq({ category }) {
    const [activeTab, setActiveTab] = useState(1);

    // Filter data by category
    const filteredData = faqData.filter(item => item.category === category);

    return (
        <div className="accordion mt-3" id="buyingquestion">
            {filteredData.map((item, index) => (
                <div className="accordion-item rounded shadow mt-2" key={index}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                            className={`accordion-button border-0 bg-white shadow ${activeTab === item.id ? '' : 'collapsed'}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse border-0 collapse ${activeTab === item.id ? 'show' : ''}`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#buyingquestion"
                    >
                        <div className="accordion-body text-muted">{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
