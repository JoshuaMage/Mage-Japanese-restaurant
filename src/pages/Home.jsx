import "../css/home.css";
import { FirstSection } from "../../src/js-component/home.js";
import { SecondSection } from "../../src/js-component/home.js";
import { ThirdImgSection } from "../../src/js-component/home.js";
import CenterWrapper from "./CenterWrapper.jsx";

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

      <div className="second-container" style={{ marginTop: "5rem" }}>
        <img
          src="https://static.tildacdn.com/tild3164-6234-4566-a162-303562656563/Knife.svg"
          alt="knife"
          style={{ height: "35rem", paddingRight: "5rem" }}
          className="knife"
        />

        <FirstSection />

        <img
          src="https://static.tildacdn.com/tild6566-3134-4632-a263-303436623935/Frame_110.svg"
          alt="demon slayer"
          className="tanjiro"
        />
      </div>

      <div className="third-Container">
        <ThirdImgSection />

        <section className="third-section">
          <SecondSection />
        </section>
      </div>
      </CenterWrapper>
  );
}
