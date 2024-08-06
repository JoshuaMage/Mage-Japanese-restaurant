import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";

export default function Menu() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p
          className="head-title-text-right"
          style={{ translate: "30px"}}
        >
          メニュー
        </p>
        <div className="head-image">
          <img
            src="https://images.alphacoders.com/136/thumb-1920-1367807.jpeg"
            alt="Sakura"
            className="head-image"
          />
        </div>
        <p className="head-title-text-left">メイジ</p>
      </HeadTitle>
    </CenterWrapper>
  );
}
