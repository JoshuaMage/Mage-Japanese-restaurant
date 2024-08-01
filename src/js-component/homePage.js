import React, { useEffect } from "react";

export const useIntersectionObserver = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

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

export const MAGESERVICE = {
  FirstContainer: [
    {
      title: "GATHER IN GOOD COMPANY",
      description: (
        <>
          THE MAGE is a meeting place for foodies and otaku (and everyone else).
          We've taken the best of anime culture and modern Japanese cuisine and
          blended them together. Drop past for a party, stay for a bite, or grab
          a goodies on the fly. <br /> <br />
          <span>
            Our only rule is: come as you are and enjoy as you please. We look
            forward to seeing you!
          </span>
        </>
      ),
      button: "BOOK YOURSELF IN",
      link: "/Booking",
    },
  ],

  SecondContainer: [
    {
      title: "BELLY FULL, HEART FULL",
      description: (
        <>
          Taste Naruto's favorite ramen, sink your teeth into the onigiri that
          demon slayer Tanjiro loves, or discuss memorable moments of your
          favorite anime over tea and air pancakes. <br /> <br />
          <span>
            Feast on all the famous anime food in our Cult Hidden Village.
          </span>
        </>
      ),
      button: "VIEW THE MENU",
      link: "/Menu",
    },
  ],

  ThirdContainer: [
    {
      title: "CHEF TEUCHI",
      description: (
        <>
          Chef TEUCH will immerse you in the cultural and historical aspects of
          gastronomy and show you how and why food is woven into the background
          or plot of anime. <br /> <br />
          <span>
            Welcome to the anime food family! Thank you for being a part of it,
            TEUCH
          </span>
        </>
      ),
      button: "READ OUR STORY",
      link: "/Story",
    },
  ],

  FourtContainer: [
    {
      title:
        "WHETER YOU'RE VACATIONING ALONE OUT WITH FRIENDS, OR PLANNING A HOLIDAY PARTY WE'RE SURE WE CAN ACCOMMODATE YOU",
      description: "After all, hospitality is what we do",
      button: "BOOK IN",
      link: "/Booking",
    },
  ],
};
