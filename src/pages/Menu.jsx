import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";
import "../css/menu.css";
import { MENUPRODUCTS } from "../js-component/menu";

import obito from "../image/menu-bottom-image/obito.png";
import sasuke from "../image/menu-bottom-image/sasuke.png";
import Footer from "../pages/Footer.jsx";

export default function Menu() {
  return (
    <>
      <section>
        <HeadTitle>
          <p className="head-title-text-right">メニュー</p>
          <div className="head-image">
            <img
              src="https://images3.alphacoders.com/954/thumb-1920-954387.jpg"
              alt="itachi"
              className="head-image"
            />
          </div>
          <p className="head-title-text-left">メイジ</p>
        </HeadTitle>
      </section>
      
      <CenterWrapper>
        <section>
          <div className="mage-menu">
            <div className="menu">
              <h2>BREAKFAST</h2>
              <section>
                {MENUPRODUCTS.BreakFast.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>
                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>

            <div className="menu">
              <h2>STARTERS</h2>
              <section>
                {MENUPRODUCTS.Starters.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>

                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>

            <div className="menu">
              <h2>RAMEN</h2>
              <section>
                {MENUPRODUCTS.Ramen.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>
                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>

            <div className="menu">
              <h2>NOODLES</h2>
              <section>
                {MENUPRODUCTS.Noodles.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>
                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>

            <div className="menu">
              <h2>HOT DISHES</h2>
              <section>
                {MENUPRODUCTS.Hotdishes.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>
                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>

            <div className="menu">
              <h2>DESSERTS</h2>
              <section>
                {MENUPRODUCTS.Desserts.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={item.product}
                        className="menu-img"
                      />
                      <img
                        src={item.hoverimg}
                        alt={`${item.product} hover`}
                        className="menu-img-hover"
                      />
                    </div>
                    <h3 className="menu-product">{item.product}</h3>
                    <p className="menu-description">{item.description}</p>
                    <button className="menu-cart">{item.cart}</button>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>

        <section>
          <div className="third-div-menu">
            <section>
              <img src={obito} alt="obito" className="obito-image" />
            </section>

            <section>
              <h3>
                WE'LL DELIVER YOUR ORDER QUIKLY AND DISCREETLY, LIKE THE REAL
                NINJAS OF HIDDEN VILLAGE OR YOU CAN PICK UP READY-MADE MEALS
                FROM THE RESTAURANT
              </h3>
              <p>
                Free Delviery for order 50$ and free parking restaurant guest
              </p>
            </section>

            <section>
              <img src={sasuke} alt="sasuke" className="sasuke-image" />
            </section>
          </div>
        </section>

        <Footer />
      </CenterWrapper>
    </>
  );
}
