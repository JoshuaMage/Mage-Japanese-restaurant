import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";
import "../css/story.css";

export default function Booking() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text-right" style={{ translate: "80px" }}>
          ゲスト
        </p>
        <div className="head-image">
          <img
            src="https://artfiles.alphacoders.com/159/thumb-800-159424.webp"
            alt="Killua"
            className="head-image"
          />
        </div>
        <p className="head-title-text-left">メイジ</p>
      </HeadTitle>

      <div className="story-firstContainer">
        <section className="story-firstSection">
          <h3>WHO ARE WE?</h3>
          <h4>
            PEACE, LOVE AND <br /> ICONIC ANIME FOODS
          </h4>
        </section>

        <section>
          <p>
            We returned to our roots to finally build the company of our dreams
            — one that proudly reclaims and celebrates the multitudes to be
            found in Asian flavors!
          </p>
          <p>
            <strong>THE CULT</strong> is our little haven, a place to give back
            to our community the best way we know how: by giving you a place to
            meet, share stories, and create memories.
          </p>
          <p>
            This is our fiery love letter to our otaku (and everyone else), our
            food, and our favorite characters of anime.
          </p>
          <p>Pull up a stool and grab a bowl – welcome to our house.</p>

          <h5>Team THE CULT x</h5>
        </section>
      </div>

      <div className="story-secondContainer">
        <section>
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </div>
    </CenterWrapper>
  );
}
