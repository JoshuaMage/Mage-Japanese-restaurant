// src/component/FourtSectionTwo.jsx
import React, { useEffect, useRef } from 'react';
import { FOURTCTNR } from '../js-component/fourtCntr';

const FourtSectionTwo = () => {
  const imgRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // Observe all elements
    Object.values(imgRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // Unobserve all elements
      Object.values(imgRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="fourt-sectiontwo">
      {FOURTCTNR.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            alt={item.title}
            className={`hidden-img ${item.className}`}
            ref={(el) => (imgRefs.current[item.id] = el)}
          />
          <h3 className="fourt-title">{item.title}</h3>
          <p className="information-description">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FourtSectionTwo;
