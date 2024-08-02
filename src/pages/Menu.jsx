import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";
import "../css/menu.css"
import { MENUPRODUCTS } from "../js-component/menu";


export default function Menu() {
  return (
    <CenterWrapper>
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

      <div className="mage-menu">
        <div className="menu">
          <h2>BREAKFAST</h2>
          <section>
            {MENUPRODUCTS.BreakFast.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.img} alt={item.product} className="menu-img" />
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
                <img src={item.img} alt={item.product} className="menu-img" />
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
                <img src={item.img} alt={item.product} className="menu-img" />
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
                <img src={item.img} alt={item.product} className="menu-img" />
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
                <img src={item.img} alt={item.product} className="menu-img" />
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
                <img src={item.img} alt={item.product} className="menu-img" />
                <h3 className="menu-product">{item.product}</h3>
                <p className="menu-description">{item.description}</p>
                <button className="menu-cart">{item.cart}</button>
              </div>
            ))}
          </section>
        </div>
      </div>
    </CenterWrapper>
  );
}
