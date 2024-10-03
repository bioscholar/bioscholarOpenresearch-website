
// 'use client';
// import React, { useState, useRef, useEffect } from 'react';

// const ArticleNavigation = (props) => {
//   const [visibleIndex, setVisibleIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null); // State to manage active heading
//   const [activeSection, setActiveSection] = useState('Main text'); // State to manage visible section
//   const articleRefs = useRef([]);

//   // Set up the Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = Number(entry.target.getAttribute('data-index'));
//           setActiveIndex(index); // Update active index based on visible article heading
//         }
//       });
//     }, {
//       threshold: 0.5 // Adjust this threshold as needed
//     });

//     // Observe each article heading
//     articleRefs.current.forEach((article) => {
//       if (article) observer.observe(article);
//     });

//     // Cleanup function to unobserve articles when the component unmounts
//     return () => {
//       articleRefs.current.forEach((article) => {
//         if (article) observer.unobserve(article);
//       });
//     };
//   }, [props.mainArticle]);

//   const toggleSubArticle = (index) => {
//     setVisibleIndex(visibleIndex === index ? null : index);
//     setActiveIndex(index); // Set the active index when the article is clicked
//   };

//   const handleScrollToArticle = (index) => {
//     if (articleRefs.current[index]) {
//       articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//       setActiveIndex(index); // Set active index when scrolling to the article
//     }
//   };

//   // Handler for section navigation
//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className='article-navigation'>
//       <div className='article-navigation-container'>
//         {/* Top Navigation */}
//         <div className='article-navigation-top'>
//           {props.articleTopNavigation.map((item, index) => (
//             <p 
//               key={index}
//               onClick={() => handleSectionClick(item)} // Set the active section on click
//               style={{
//                 cursor: 'pointer',
//                 color: activeSection === item ? '#7E66F4' : 'black', // Highlight active section
//                 transition: 'color 0.3s'
//               }}
//             >
//               {item}
//             </p>
//           ))}
//         </div>

//         {/* Main Navigation */}
//         <div className='article-navigation-main'>
//           {/* Table of Contents */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-table'>
//               <div className='article-navigation-table-container'>
//                 <div className='article-navigation-table-heading'>
//                   <h3>Table of contents</h3>
//                 </div>
//                 {props.mainArticle && props.mainArticle.map((item, index) => (
//                   <div className='article-navigation-table-contents' key={index}>
//                     <h2
//                       onClick={() => {
//                         toggleSubArticle(index);
//                         handleScrollToArticle(index); // Scroll to main article and set activeIndex
//                       }}
//                       style={{
//                         cursor: 'pointer',
//                         color: activeIndex === index ? '#7E66F4' : 'black', // Change color based on active index
//                         transition: 'color 0.3s' // Smooth transition
//                       }}
//                     >
//                       {item.title}
//                     </h2>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Main Text Section */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-text'>
//               <div className="article-navigation-text-container">
//                 {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//                   <div
//                     className="article-navigation-text-contents"
//                     key={mainIndex}
//                     ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
//                     data-index={mainIndex} // Store index in data attribute
//                   >
//                     <h1 id={mainIndex}>{article.title}</h1>
//                     {Array.isArray(article.description) && article.description.map((desc, index) => {
//                       const isImage = typeof desc === 'string' && (desc.includes('.jpg') || desc.includes('.png') || desc.includes('.jpeg') || desc.includes('.gif'));
//                       return isImage ? (
//                         <img key={index} src={desc} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
//                       ) : (
//                         <p key={index}>{desc}</p>
//                       );
//                     })}
//                     {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
//                       <div className="article-navigation-text-subarticle" key={subIndex}>
//                         <h2>{subarticle.title}</h2>
//                         {Array.isArray(subarticle.description) && subarticle.description.map((subDesc, descIndex) => {
//                           const isImages = typeof subDesc === 'string' && (subDesc.includes('.jpg') || subDesc.includes('.png') || subDesc.includes('.jpeg') || subDesc.includes('.gif'));
//                           return isImages ? (
//                             <img key={descIndex} src={subDesc} alt={`Subarticle Image ${descIndex}`} style={{ maxWidth: '100%' }} />
//                           ) : (
//                             <p key={descIndex}>{subDesc}</p>
//                           );
//                         })}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Figure Section */}
//           {activeSection === 'Figures' && (
//             <div className='article-navigation-figure'>
//               <p>Figure content goes here</p>
//             </div>
//           )}

//           {/* Tables Section */}
//           {activeSection === 'Tables' && (
//             <div className='article-navigation-tables'>
//               <p>Table content goes here</p>
//             </div>
//           )}

//           {/* Annexure Section */}
//           {activeSection === 'Annexures & Article Metric' && (
//             <div className='article-navigation-annexure'>
//               <p>Annexure content goes here</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleNavigation;


// 'use client';
// import React, { useState, useRef, useEffect } from 'react';

// const ArticleNavigation = (props) => {
//   const [activeIndex, setActiveIndex] = useState(null); // State to manage active heading
//   const [activeSection, setActiveSection] = useState('Main text'); // State to manage visible section
//   const articleRefs = useRef([]);
//   const headingRefs = useRef([]); // Ref for the h1 headings

//   const handleScroll = () => {
//     const offsets = headingRefs.current.map((heading) => heading.getBoundingClientRect().top);
//     const windowHeight = window.innerHeight;

//     // Find the first heading that is within the viewport
//     const index = offsets.findIndex((offset) => offset >= 0 && offset < windowHeight / 2);

//     // Update the active index if a heading is found
//     if (index !== -1) {
//       setActiveIndex(index);
//     }
//   };

//   useEffect(() => {
//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleSubArticle = (index) => {
//     // Optional: Toggle the sub-article visibility logic
//   };

//   const handleScrollToArticle = (index) => {
//     if (articleRefs.current[index]) {
//       articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//       setActiveIndex(index); // Set active index when scrolling to the article
//     }
//   };

//   // Handler for section navigation
//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className='article-navigation'>
//       <div className='article-navigation-container'>
//         {/* Top Navigation */}
//         <div className='article-navigation-top'>
//           {props.articleTopNavigation.map((item, index) => (
//             <p 
//               key={index}
//               onClick={() => handleSectionClick(item)} // Set the active section on click
//               style={{
//                 cursor: 'pointer',
//                 color: activeSection === item ? '#7E66F4' : 'black', // Highlight active section
//                 transition: 'color 0.3s'
//               }}
//             >
//               {item}
//             </p>
//           ))}
//         </div>
//         <div className='article-navigation-top-mobile'>
//           {props.articleTopNavigation.map((item, index) => (
//             <p 
//               key={index}
//               onClick={() => handleSectionClick(item)} // Set the active section on click
//               style={{
//                 cursor: 'pointer',
//                 color: activeSection === item ? '#7E66F4' : 'black', // Highlight active section
//                 transition: 'color 0.3s'
//               }}
//             >
//               {item}
//             </p>
//           ))}
//         </div>

//         {/* Main Navigation */}
//         <div className='article-navigation-main'>
//           {/* Table of Contents */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-table'>
//               <div className='article-navigation-table-container'>
//                 <div className='article-navigation-table-heading'>
//                   <h3>Table of contents</h3>
//                 </div>
//                 {props.mainArticle && props.mainArticle.map((item, index) => (
//                   <div className='article-navigation-table-contents' key={index}>
//                     <h2
//                       onClick={() => {
//                         toggleSubArticle(index);
//                         handleScrollToArticle(index); // Scroll to main article and set activeIndex
//                       }}
//                       style={{
//                         cursor: 'pointer',
//                         color: activeIndex === index ? '#7E66F4' : 'black', // Change color based on active index
//                         transition: 'color 0.3s' // Smooth transition
//                       }}
//                     >
//                       {item.title}
//                     </h2>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Main Text Section */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-text'>
//               <div className="article-navigation-text-container">
//                 {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//                   <div
//                     className="article-navigation-text-contents"
//                     key={mainIndex}
//                     ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
//                     data-index={mainIndex} // Store index in data attribute
//                   >
//                     <h1 
//                       id={mainIndex}
//                       ref={(el) => (headingRefs.current[mainIndex] = el)} // Set ref for the h1 heading
//                     >
//                       {article.title}
//                     </h1>
//                     {Array.isArray(article.description) && article.description.map((desc, index) => {
//                       const isImage = typeof desc === 'string' && (desc.includes('.jpg') || desc.includes('.png') || desc.includes('.jpeg') || desc.includes('.gif'));
//                       return isImage ? (
//                         <img key={index} src={desc} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
//                       ) : (
//                         <p key={index}>{desc}</p>
//                       );
//                     })}
//                     {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
//                       <div className="article-navigation-text-subarticle" key={subIndex}>
//                         <h2>{subarticle.title}</h2>
//                         {Array.isArray(subarticle.description) && subarticle.description.map((subDesc, descIndex) => {
//                           const isImages = typeof subDesc === 'string' && (subDesc.includes('.jpg') || subDesc.includes('.png') || subDesc.includes('.jpeg') || subDesc.includes('.gif'));
//                           return isImages ? (
//                             <img key={descIndex} src={subDesc} alt={`Subarticle Image ${descIndex}`} style={{ maxWidth: '100%' }} />
//                           ) : (
//                             <p key={descIndex}>{subDesc}</p>
//                           );
//                         })}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Figure Section */}
//           {activeSection === 'Figures' && (
//             <div className='article-navigation-figure'>
//               <p>Figure content goes here</p>
//             </div>
//           )}

//           {/* Tables Section */}
//           {activeSection === 'Tables' && (
//             <div className='article-navigation-tables'>
//               <p>Table content goes here</p>
//             </div>
//           )}

//           {/* Annexure Section */}
//           {activeSection === 'Annexures & Article Metric' && (
//             <div className='article-navigation-annexure'>
//               <p>Annexure content goes here</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleNavigation;

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';

// const ArticleNavigation = (props) => {
//   const [activeIndex, setActiveIndex] = useState(null); // State to manage active heading
//   const [activeSection, setActiveSection] = useState('Main text'); // State to manage visible section
//   const [currentTopIndex, setCurrentTopIndex] = useState(0); // State to manage current item in mobile nav
//   const articleRefs = useRef([]);
//   const headingRefs = useRef([]); // Ref for the h1 headings

//   const handleScroll = () => {
//     const offsets = headingRefs.current.map((heading) => heading.getBoundingClientRect().top);
//     const windowHeight = window.innerHeight;

//     // Find the first heading that is within the viewport
//     const index = offsets.findIndex((offset) => offset >= 0 && offset < windowHeight / 2);

//     // Update the active index if a heading is found
//     if (index !== -1) {
//       setActiveIndex(index);
//     }
//   };

//   useEffect(() => {
//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleSubArticle = (index) => {
//     // Optional: Toggle the sub-article visibility logic
//   };

//   const handleScrollToArticle = (index) => {
//     if (articleRefs.current[index]) {
//       articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//       setActiveIndex(index); // Set active index when scrolling to the article
//     }
//   };

//   // Handler for section navigation
//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//   // Navigation for mobile top
//   const handleNext = () => {
//     if (currentTopIndex < props.articleTopNavigation.length - 1) {
//       setCurrentTopIndex((prevIndex) => prevIndex + 1);
//       setActiveSection(props.articleTopNavigation[currentTopIndex + 1]);
//     }
//   };

//   const handlePrev = () => {
//     if (currentTopIndex > 0) {
//       setCurrentTopIndex((prevIndex) => prevIndex - 1);
//       setActiveSection(props.articleTopNavigation[currentTopIndex - 1]);
//     }
//   };

//   return (
//     <div className='article-navigation'>
//       <div className='article-navigation-container'>
//         {/* Top Navigation */}
//         <div className='article-navigation-top'>
//           {props.articleTopNavigation.map((item, index) => (
//             <p 
//               key={index}
//               onClick={() => handleSectionClick(item)} // Set the active section on click
//               style={{
//                 cursor: 'pointer',
//                 color: activeSection === item ? '#7E66F4' : 'black', // Highlight active section
//                 transition: 'color 0.3s'
//               }}
//             >
//               {item}
//             </p>
//           ))}
//         </div>
        
//         {/* Mobile Navigation */}
//         <div className='article-navigation-top-mobile'>
//           {/* Display only the current item */}
//           <button onClick={handlePrev} disabled={currentTopIndex === 0}>
//               Previous
//             </button>
//           <p 
//             style={{
//               cursor: 'pointer',
//               color: '#7E66F4', // Highlight active section
//               transition: 'color 0.3s',
//               fontWeight: 'bold' // Make the current item bold
//             }}
//           >
//             {props.articleTopNavigation[currentTopIndex]}
//           </p>

//           {/* Next and Previous buttons */}
           
//             <button onClick={handleNext} disabled={currentTopIndex === props.articleTopNavigation.length - 1}>
//               Next
//             </button>
        
//         </div>

//         {/* Main Navigation */}
//         <div className='article-navigation-main'>
//           {/* Table of Contents */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-table'>
//               <div className='article-navigation-table-container'>
//                 <div className='article-navigation-table-heading'>
//                   <h3>Table of contents</h3>
//                 </div>
//                 {props.mainArticle && props.mainArticle.map((item, index) => (
//                   <div className='article-navigation-table-contents' key={index}>
//                     <h2
//                       onClick={() => {
//                         toggleSubArticle(index);
//                         handleScrollToArticle(index); // Scroll to main article and set activeIndex
//                       }}
//                       style={{
//                         cursor: 'pointer',
//                         color: activeIndex === index ? '#7E66F4' : 'black', // Change color based on active index
//                         transition: 'color 0.3s' // Smooth transition
//                       }}
//                     >
//                       {item.title}
//                     </h2>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Main Text Section */}
//           {activeSection === 'Main text' && (
//             <div className='article-navigation-text'>
//               <div className="article-navigation-text-container">
//                 {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//                   <div
//                     className="article-navigation-text-contents"
//                     key={mainIndex}
//                     ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
//                     data-index={mainIndex} // Store index in data attribute
//                   >
//                     <h1 
//                       id={mainIndex}
//                       ref={(el) => (headingRefs.current[mainIndex] = el)} // Set ref for the h1 heading
//                     >
//                       {article.title}
//                     </h1>
//                     {Array.isArray(article.description) && article.description.map((desc, index) => {
//                       const isImage = typeof desc === 'string' && (desc.includes('.jpg') || desc.includes('.png') || desc.includes('.jpeg') || desc.includes('.gif'));
//                       return isImage ? (
//                         <img key={index} src={desc} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
//                       ) : (
//                         <p key={index}>{desc}</p>
//                       );
//                     })}
//                     {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
//                       <div className="article-navigation-text-subarticle" key={subIndex}>
//                         <h2>{subarticle.title}</h2>
//                         {Array.isArray(subarticle.description) && subarticle.description.map((subDesc, descIndex) => {
//                           const isImages = typeof subDesc === 'string' && (subDesc.includes('.jpg') || subDesc.includes('.png') || subDesc.includes('.jpeg') || subDesc.includes('.gif'));
//                           return isImages ? (
//                             <img key={descIndex} src={subDesc} alt={`Subarticle Image ${descIndex}`} style={{ maxWidth: '100%' }} />
//                           ) : (
//                             <p key={descIndex}>{subDesc}</p>
//                           );
//                         })}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Figure Section */}
//           {activeSection === 'Figures' && (
//             <div className='article-navigation-figure'>
//               <p>Figure content goes here</p>
//             </div>
//           )}

//           {/* Tables Section */}
//           {activeSection === 'Tables' && (
//             <div className='article-navigation-tables'>
//               <p>Table content goes here</p>
//             </div>
//           )}

//           {/* Annexure Section */}
//           {activeSection === 'Annexures & Article Metric' && (
//             <div className='article-navigation-annexure'>
//               <p>Annexure content goes here</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleNavigation;


'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import arrow from '@public/images/navbar/arrow.svg'

const ArticleNavigation = (props) => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active heading
  const [activeSection, setActiveSection] = useState('Main text'); // State to manage visible section
  const [currentTopIndex, setCurrentTopIndex] = useState(0); // State to manage current item in mobile nav
  const articleRefs = useRef([]);
  const headingRefs = useRef([]); // Ref for the h1 headings

  const handleScroll = () => {
    // Filter out null references before mapping
    const offsets = headingRefs.current
      .filter((heading) => heading !== null) // Ensure heading is not null
      .map((heading) => heading.getBoundingClientRect().top);

    const windowHeight = window.innerHeight;

    // Find the first heading that is within the viewport
    const index = offsets.findIndex((offset) => offset >= 0 && offset < windowHeight / 2);

    // Update the active index if a heading is found
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSubArticle = (index) => {
    // Optional: Toggle the sub-article visibility logic
  };

  const handleScrollToArticle = (index) => {
    if (articleRefs.current[index]) {
      articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index); // Set active index when scrolling to the article
    }
  };

  // Handler for section navigation
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Navigation for mobile top
  const handleNext = () => {
    if (currentTopIndex < props.articleTopNavigation.length - 1) {
      setCurrentTopIndex((prevIndex) => prevIndex + 1);
      setActiveSection(props.articleTopNavigation[currentTopIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentTopIndex > 0) {
      setCurrentTopIndex((prevIndex) => prevIndex - 1);
      setActiveSection(props.articleTopNavigation[currentTopIndex - 1]);
    }
  };

  return (
    <div className='article-navigation'>
      <div className='article-navigation-container'>
        {/* Top Navigation */}
        <div className='article-navigation-top'>
          {props.articleTopNavigation.map((item, index) => (
            <p 
              key={index}
              onClick={() => handleSectionClick(item)} // Set the active section on click
              style={{
                cursor: 'pointer',
                color: activeSection === item ? '#7E66F4' : 'black', // Highlight active section
                transition: 'color 0.3s'
              }}
            >
              {item}
            </p>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div className='article-navigation-top-mobile'>
  <div onClick={handlePrev} disabled={currentTopIndex === 0}>
    <Image src={arrow} style={{ transform: 'rotate(180deg)' }} />
  </div>
    
  <p 
    style={{
      cursor: 'pointer',
      color: 'black', // Highlight active section
      transition: 'color 0.3s',
      fontWeight: 'bold' // Make the current item bold
    }}
  >
    {props.articleTopNavigation[currentTopIndex]}
  </p>

  {/* Next button should call handleNext instead of handlePrev */}
  <div onClick={handleNext} disabled={currentTopIndex === props.articleTopNavigation.length - 1}>
    <Image src={arrow} />
  </div>
</div>

        {/* Main Navigation */}
        <div className='article-navigation-main'>
          {/* Table of Contents */}
          {activeSection === 'Main text' && (
            <div className='article-navigation-table'>
              <div className='article-navigation-table-container'>
                <div className='article-navigation-table-heading'>
                  <h3>Table of contents</h3>
                </div>
                {props.mainArticle && props.mainArticle.map((item, index) => (
                  <div className='article-navigation-table-contents' key={index}>
                    <h2
                      onClick={() => {
                        toggleSubArticle(index);
                        handleScrollToArticle(index); // Scroll to main article and set activeIndex
                      }}
                      style={{
                        cursor: 'pointer',
                        color: activeIndex === index ? '#7E66F4' : 'black', // Change color based on active index
                        transition: 'color 0.3s' // Smooth transition
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Text Section */}
          {activeSection === 'Main text' && (
            <div className='article-navigation-text'>
              <div className="article-navigation-text-container">
                {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
                  <div
                    className="article-navigation-text-contents"
                    key={mainIndex}
                    ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
                    data-index={mainIndex} // Store index in data attribute
                  >
                    <h1 
                      id={mainIndex}
                      ref={(el) => (headingRefs.current[mainIndex] = el)} // Set ref for the h1 heading
                    >
                      {article.title}
                    </h1>
                    {Array.isArray(article.description) && article.description.map((desc, index) => {
                      const isImage = typeof desc === 'string' && (desc.includes('.jpg') || desc.includes('.png') || desc.includes('.jpeg') || desc.includes('.gif'));
                      return isImage ? (
                        <img key={index} src={desc} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
                      ) : (
                        <p key={index}>{desc}</p>
                      );
                    })}
                    {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
                      <div className="article-navigation-text-subarticle" key={subIndex}>
                        <h2>{subarticle.title}</h2>
                        {Array.isArray(subarticle.description) && subarticle.description.map((subDesc, descIndex) => {
                          const isImages = typeof subDesc === 'string' && (subDesc.includes('.jpg') || subDesc.includes('.png') || subDesc.includes('.jpeg') || subDesc.includes('.gif'));
                          return isImages ? (
                            <img key={descIndex} src={subDesc} alt={`Subarticle Image ${descIndex}`} style={{ maxWidth: '100%' }} />
                          ) : (
                            <p key={descIndex}>{subDesc}</p>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Figure Section */}
          {activeSection === 'Figures' && (
            <div className='article-navigation-figure'>
              <p>Figure content goes here</p>
            </div>
          )}

          {/* Tables Section */}
          {activeSection === 'Tables' && (
            <div className='article-navigation-tables'>
              <p>Table content goes here</p>
            </div>
          )}

          {/* Annexure Section */}
          {activeSection === 'Annexures & Article Metric' && (
            <div className='article-navigation-annexure'>
              <p>Annexure content goes here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleNavigation;
