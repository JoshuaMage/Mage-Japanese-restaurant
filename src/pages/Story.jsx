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
            src="https://artfiles.alphacoders.com/159/thumb-800-159424.webp"
            alt="Killua"
            className="head-image"
          />
        </div>
        <p className="head-title-text">メイジ</p>
      </HeadTitle>
    </CenterWrapper>
  );
}
