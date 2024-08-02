import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle";
import "../css/headtitle.css";

export default function Booking() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text-right" >ブッキング</p>
        <div className="head-image">
          <img
            src="https://images6.alphacoders.com/134/thumbbig-1346791.webp"
            alt="Solo Leveling"
            className="head-image"
          />
        </div>
        <p className="head-title-text-left">メイジ</p>
      </HeadTitle>
    </CenterWrapper>
  );
}
