// 'use client'
// import React, {useState} from 'react'
// import { LandingAccordionData } from '@data/LandingPage/LandingPageData';
// import Image from 'next/image';
// import plus from '@public/images/landing/accordion/plus.png'
// import minus from '@public/images/landing/accordion/minus.png'
// export const LandingAccordion = () => {
//     const [accOpen,setAccOpen] = useState(false);
//   return (
//     <div className='landing-accordion'>
//         <div className='landing-accordion-container'>
//             <div className='landing-accordion-heading'>
//                 <h2>Get the latest and the best articles in your sector</h2>
//             </div>
//             <div className='landing-accordion-content'>
//                 {LandingAccordionData.map((item,index)=>(
//                 <div className='landing-accordion-box' key={index}>
//                     <h3>{item.title} {!accOpen ?( <Image src={plus}/>):( <Image src={minus}/>)}</h3>
//                     {accOpen && <p>{item.para} </p>}
//                 </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }


'use client'
import React, { useState } from 'react';
import { LandingAccordionData } from '@data/LandingPage/LandingPageData';
import Image from 'next/image';
import plus from '@public/images/landing/accordion/plus.png';
import minus from '@public/images/landing/accordion/minus.png';

export const LandingAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the currently open accordion
        } else {
            setOpenIndex(index); // Open the clicked accordion
        }
    };

    return (
        <div className='landing-accordion'>
            <div className='landing-accordion-container'>
                <div className='landing-accordion-heading'>
                    <h2>Get the latest and the best articles in your sector</h2>
                </div>
                <div className='landing-accordion-content'>
                    {LandingAccordionData.map((item, index) => (
                        <div className='landing-accordion-box' key={index}>
                            <h3 onClick={() => toggleAccordion(index)}>
                                {item.title} 
                                {openIndex === index ? (
                                    <Image src={minus} alt="plus icon" />
                                ) : (
                                    <Image src={plus} alt="minus icon" />
                                )}
                            </h3>
                            {openIndex === index && <p>{item.para}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
