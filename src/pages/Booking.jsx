import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/booking.css";
import Footer from "../pages/Footer";

import gojo from "../image/booking-image/gojo.png";
import frieren from "../image/booking-image/frieren.webp";

export default function Booking() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text-right">ブッキング</p>
        <div className="head-image">
          <img
            src="https://images6.alphacoders.com/134/thumbbig-1346791.webp"
            alt="Solo Leveling"
            className="head-image"
          />
        </div>
        <p className="head-title-text-left">メイジ</p>
      </HeadTitle>
      <div className="booking">
        <div className="booking-section">
          <section >
            <img src={frieren} alt="frieren" className="frieren-image "  />
          </section>

          <div className="reservation-form">
            <section className="reservation-details">
              <h3>
                RESERVATION YOUR <br /> TABLE AT THE MAGE
              </h3>

              <p>
                We take reservations for groups of any size. You are very
                welcome to come along as a walk-in and we get you seated as
                quickly as possible, but at busy times there may be a wait.
                <br />
                <br />
                <span>
                  We have long tables so our customers can meet, exchange
                  thoughts and make new friends!
                </span>
              </p>
            </section>

            <form className="form-input" >
              <input type="text" placeholder="YOUR NAME" required  />
              <input type="number" placeholder="YOUR PHONE NUMBER" required />
              <input type="date" required  style={{ padding: "1rem"}}/>
              <input type="text" placeholder="TIME" required />
              <input type="text" placeholder="GUEST" required />
              <input type="text" placeholder="TABLE WISHES (OPTIONAL)" />
            </form>

            <section className="form-checkbox">
              <section>
                <input type="checkbox" />
                <p>
                  By selecting «Confirm reservation» you are agreeing to the
                  terms and conditions of the User Agreement and Privacy Policy
                </p>
              </section>
              <button className="form-button">CONFRIM RESERVATION</button>
            </section>
          </div>

          <section>
            <img src={gojo} alt="luffy-songod-nikka" className="gojo-image" />
          </section>
        </div>
      </div>

      <Footer />
    </CenterWrapper>
  );
}
