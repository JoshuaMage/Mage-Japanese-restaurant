import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";

export default function Booking() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text">ゲスト</p>
        <div className="head-image">
        <img
          src="https://images7.alphacoders.com/133/thumb-1920-1335124.jpeg"
          alt="geto and gojo"
          className="head-image"
        />
        </div>
        <p className="head-title-text">メイジ</p>
      </HeadTitle>
    </CenterWrapper>
  );
}
