import {  NavLink } from "react-router-dom";
import "../css/home.css";

export default function Homepage() {
  return (
    <>
      <div className="top-container">
        <img
          src="https://static.tildacdn.com/tild3135-6339-4338-a161-653430623733/Group_2922.svg"
          alt="ichigo"
          class="move-right"
        />
        <section className="top-section">
          <p>YOU HAVE WATCHED IT, NOW YOU CAN TASTE IT</p>
          <h2>BRINGING ANIME</h2>
          <h3>FOOD TO LIFE</h3>
        </section>
        <img
          src="https://static.tildacdn.com/tild3631-3464-4534-b234-363539663736/Vector.svg"
          alt="dr"
          class="move-left"
        />
      </div>

      <div className="second-container" style={{ marginTop: "5rem" }}>
        <img
          src="https://static.tildacdn.com/tild3164-6234-4566-a162-303562656563/Knife.svg"
          alt="knife"
          style={{ height: "35rem", paddingRight: "5rem" }}
          className="knife"
        />
        <section className="second-section">
          <h2>GATHER IN GOOD COMPANY</h2>
          <p>
            THE MAGE is a meeting place for foodies and otaku (and everyone
            else). We've taken the best of anime culture and modern Japanese
            cuisine and blended them together. Drop past for a party, stay for a
            bite, or grab a goodies on the fly. <br /> <br />
            <span>
              Our only rule is: come as you are and enjoy as you please. We look
              forward to seeing you!
            </span>
          </p>
          <NavLink to={"/MageRestaurant/Booking"}><button>BOOK YOUR SELF IN</button></NavLink>
        </section>
        <img
          src="https://static.tildacdn.com/tild6566-3134-4632-a263-303436623935/Frame_110.svg"
          alt="demon slayer"
          className="tanjiro"
        />
      </div>
    </>
  );
}
