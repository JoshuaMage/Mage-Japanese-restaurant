import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import Footer from "../pages/Footer.jsx";

import "../css/headtitle.css";
import "../css/guest.css";

import muzan from "../image/booking-image/muzan.png";
import akaza from "../image/booking-image/akaza.png";
import doma from "../image/booking-image/doma.png";
import enmu from "../image/booking-image/Enmu.png";
import kokushibou from "../image/booking-image/kokushibou.png";

export default function Booking() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text-right">ゲスト</p>
        <div className="head-image">
          <img
            src="https://images7.alphacoders.com/133/thumb-1920-1335124.jpeg"
            alt="geto and gojo"
            className="head-image"
          />
        </div>
        <p className="head-title-text-left">メイジ</p>
      </HeadTitle>

      <div className="guest-section">
        <section className="guest-firstContainer">
          <h3>OUR RULES</h3>
          <h4>
            SIMPLE, CLEAR <br /> AND UNBREAKABLE
          </h4>
        </section>
        <section className="guest-firstContainer">
          <p>
            To ensure that our guests fully enjoy the process, have fun, relax
            and feel the holiday that we try to broadcast every day, our
            restaurant has certain rules. <br /> <br /> For your convenience,
            please read the rules before you visit THE MAGE Restaurant. If you
            have any questions, feel free to email us and we'll be happy to
            help!
          </p>
          <h5>Team THE MAGE x</h5>
        </section>
      </div>

      <div className="guest-secondContainer">
        <div className="guest-img-container">
          <section>
            <h2>
              TABLE <br /> BOOKING SYSTEM
            </h2>
            <p>
              Every day our restaurant is filled with dozens of people, book a
              table in two clicks and we'll find the perfect spot: in silence by
              a panoramic window, closer to a movie projector with iconic anime
              or overlooking the stunning open kitchen.
            </p>
          </section>
          <img src={muzan} alt="muzan" className="guest-image" />
        </div>

        <div className="guest-img-container">
          <section>
            <h2>
              LAPTOP <br /> FREE PLACE
            </h2>
            <p>
              THE MAGE is about a holiday every day! Bright impressions, lively
              communication, memorable moments and enjoying the magic of each
              dish. The last thing we want to be is a typical co-working place{" "}
            </p>
          </section>
          <img src={akaza} alt="akaza" className="guest-image" />
        </div>

        <div className="guest-img-container">
          <section>
            <h2>
              PET <br /> FRIENDLY PLACE
            </h2>
            <p>
              You can come to us in the company of your pet, but the main thing
              is that it must be well-mannered and not disturb other guests and
              their pets. It is important to us that all visitors feel
              comfortable and cozy at THE MAGE.
            </p>
          </section>
          <img src={doma} alt="doma" className="guest-image" />
        </div>

        <div className="guest-img-container">
          <section>
            <h2>
              Gluten <br /> Free Friendly place
            </h2>
            <p>
              Whether you’re following a gluten-free diet due to celiac disease,
              a sensitivity to gluten or personal preference, you don’t have to
              give up your favorite dishes. Gluten-Free Noodles always are
              available for customers in THE MAGE.
            </p>
          </section>
          <img src={enmu} alt="enmu" className="guest-image" />
        </div>

        <div className="guest-img-container">
          <section>
            <h2>
              Diversity <br /> Friendly place
            </h2>
            <p>
              The location and interior of our restaurant have been thought out
              to the smallest detail, so that each guest was the most
              comfortable and convenient.
            </p>
          </section>
          <img src={kokushibou} alt="kokushibou" className="guest-image" />
        </div>
      </div>

<div>
  <section>
    <img src="" alt="" />
  </section>

  <section>
    
  </section>
</div>
      <Footer />
    </CenterWrapper>
  );
}
