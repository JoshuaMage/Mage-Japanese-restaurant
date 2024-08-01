import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "../css/home.css";
import {
  MAGESERVICE,
  useIntersectionObserver,
} from "../js-component/homePage.js";

import FourtSectionTwo from "../component/showImg.jsx";
import CenterWrapper from "./CenterWrapper.jsx";
import VideoSection from "../component/VideoSection.jsx";

const ServiceSection = ({ title, description, button, link }) => {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <div ref={ref} className="information-section">
      <h2>{title}</h2>
      <p className="information-description">{description}</p>
      <NavLink to={link} className="information-button">
        {button}
      </NavLink>
    </div>
  );
};

export default function Homepage() {
  return (
    <CenterWrapper>
      <div className="top-container">
        <img
          src="https://static.tildacdn.com/tild3135-6339-4338-a161-653430623733/Group_2922.svg"
          alt="ichigo"
          className="move-right"
        />
        <section className="top-section">
          <p>YOU HAVE WATCHED IT, NOW YOU CAN TASTE IT</p>
          <h2>BRINGING ANIME</h2>
          <h3>FOOD TO LIFE</h3>
        </section>
        <img
          src="https://static.tildacdn.com/tild3631-3464-4534-b234-363539663736/Vector.svg"
          alt="dr"
          className="move-left"
        />
      </div>

      <div className="second-container">
        <img
          src="https://static.tildacdn.com/tild3164-6234-4566-a162-303562656563/Knife.svg"
          alt="knife"
          style={{ height: "35rem", paddingRight: "5rem" }}
          className="knife"
        />

        {MAGESERVICE.FirstContainer.map((item, index) => (
          <ServiceSection key={index} {...item} />
        ))}

        <img
          src="https://static.tildacdn.com/tild6566-3134-4632-a263-303436623935/Frame_110.svg"
          alt="demon slayer"
          className="tanjiro"
        />
      </div>

      <div className="third-container">
        <section>
          <img
            src="https://static.tildacdn.com/tild3133-6163-4432-a531-663331323036/Frame_112.svg"
            alt="ramen"
            className="color-change"
          />
          <img
            src="https://static.tildacdn.com/tild6537-3035-4265-b433-623264333537/Frame_111.svg"
            alt="noodles"
            className="color-change"
          />
          <img
            src="https://static.tildacdn.com/tild6539-6635-4532-b065-373738313336/Frame_198.svg"
            alt="takoyaki"
            className="color-change"
          />
          <img
            src="https://static.tildacdn.com/tild3331-3931-4739-b862-313931383938/Frame_113.svg"
            alt="onigiri"
            className="color-change"
          />
        </section>

        <section className="third-section">
          {MAGESERVICE.SecondContainer.map((item, index) => (
            <ServiceSection key={index} {...item} />
          ))}
        </section>
      </div>

      <div>
        <section className="fourt-section">
          <h2 className="fourt-title">MAGE</h2>
          <h2 className="fourt-title">MAGE</h2>
          <h2 className="fourt-title">MAGE</h2>
          <h2 className="fourt-title">MAGE</h2>
        </section>
        <FourtSectionTwo />
        <section className="fourt-sectionII">
          <section className="third-section">
            {MAGESERVICE.ThirdContainer.map((item, index) => (
              <ServiceSection key={index} {...item} />
            ))}
          </section>

          <section>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd2rjlp-1d23e57d-fa71-4f5b-b331-74fc5867a258.png/v1/fill/w_512,h_512,strp/teuchi__ichiraku__render__naruto_ol__by_maxiuchiha22_dd2rjlp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDJyamxwLTFkMjNlNTdkLWZhNzEtNGY1Yi1iMzMxLTc0ZmM1ODY3YTI1OC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.44pkNBbn1eyzZZscDJxmPK6rMrp3nHGl_0PhGCJoBOU"
              alt="RAMEN GUY"
              className="ramenguy"
            />
          </section>
        </section>
        <VideoSection />
        <div className="Bottom-section">
          <section className="third-section">
            {MAGESERVICE.FourtContainer.map((item, index) => (
              <ServiceSection key={index} {...item} />
            ))}
          </section>
        </div>
        <div className="slider">
          <div className="list">
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3930-6565-4261-b264-363332383838/Frame_82.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3930-6565-4261-b264-363332383838/Frame_82.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3561-6635-4061-b535-633630393330/Frame_85.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3133-6566-4465-a361-333462663964/Frame_86.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3437-3530-4535-a464-613262623538/Frame_89.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3566-3831-4161-a638-616331666266/Frame_87.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3038-6163-4635-b238-353365633264/Frame_88.svg"
                alt="animeEatingfoods"
              />
            </div>
            <div className="item">
              <img
                src="https://static.tildacdn.com/tild3466-6235-4262-a439-623563636631/Frame_90.svg"
                alt="animeEatingfoods"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="input-area">
        <section>
          <img
            src="https://static.tildacdn.com/tild6137-3363-4438-b762-653832326330/Frame_89.svg"
            alt="girl peace"
          />
        </section>

        <section className="input-section">
          <h3>
            JOIN OUR MAGE CLAN AND GET ALL <br /> THE LATEST NEWS AND UPDATES
          </h3>
          <input
            type="email"
            required
            placeholder="YOUR EMAIL"
            className="input-section"
          />
          <input
            type="email"
            required
            placeholder="YOUR NAME"
            className="input-section"
          />
          <button className="information-button">JOIN US</button>
        </section>

        <section>
          <img
            src="https://static.tildacdn.com/tild3566-6636-4231-b636-643565396465/Vector.svg"
            alt="deku"
          />
        </section>
      </div>

      <div className="contact-section">
        <section>
          <h2>THE MAGE</h2>
        </section>
        <section>
          <h3>ADDRESS</h3>
          <p>
            The Hidden Leaf Village, <br /> 1234, Konoha
          </p>
        </section>
        <section>
          <h3>OPENING HOURS</h3>
          <p>
            Monday - Thursday 11am - 11pm, <br />
            Friday & Sunday 12noon - 11pm
          </p>
        </section>
        <section>
          <h3>CONTACT US</h3>
          <p>
            +353 1 962 9514, <br /> dummy@theMage.com
          </p>
        </section>
      </div>

      <footer>
        <h3>MAGE 2024@</h3>
        <h4>A non-profit project, created as part of training</h4>
      </footer>
    </CenterWrapper>
  );
}
