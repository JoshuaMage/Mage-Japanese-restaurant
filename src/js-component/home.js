import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const useIntersectionObserver = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);
};

const FirstSection = () => {
  const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="information-section">
      <h2>GATHER IN GOOD COMPANY</h2>
      <p>
        THE MAGE is a meeting place for foodies and otaku (and everyone else).
        We've taken the best of anime culture and modern Japanese cuisine and
        blended them together. Drop past for a party, stay for a bite, or grab a
        goodies on the fly. <br /> <br />
        <span>
          Our only rule is: come as you are and enjoy as you please. We look
          forward to seeing you!
        </span>
      </p>
      <NavLink to={"/MageRestaurant/Booking"}>
        <button>BOOK YOUR SELF IN</button>
      </NavLink>
    </section>
  );
};

const SecondSection = () => {
  const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="information-section">
      <h2>BELLY FULL, HEART FULL</h2>
      <p>
        Taste Naruto's favorite ramen, sink your teeth into the onigiri that
        demon slayer Tanjiro loves, or discuss memorable moments of your
        favorite anime over tea and air pancakes. <br /> <br />
        <span>
          Feast on all the famous anime food in our Cult Hidden Village.
        </span>
      </p>
      <NavLink to={"/MageRestaurant/Menu"}>
        <button>VIEW THE MENU</button>
      </NavLink>
    </section>
  );
};

const ThirdImgSection = () => {
  return (
    <section className="third-img">
      <img
        src="https://static.tildacdn.com/tild3133-6163-4432-a531-663331323036/Frame_112.svg"
        alt="ramen"
      />
      <img
        src="https://static.tildacdn.com/tild6537-3035-4265-b433-623264333537/Frame_111.svg"
        alt="noodles"
      />
      <img
        src="https://static.tildacdn.com/tild6539-6635-4532-b065-373738313336/Frame_198.svg"
        alt="takoyaki"
      />
      <img
        src="https://static.tildacdn.com/tild3331-3931-4739-b862-313931383938/Frame_113.svg"
        alt="onigiri"
      />
    </section>
  );
};

export { FirstSection, SecondSection, ThirdImgSection };
