import CenterWrapper from "./CenterWrapper";
import HeadTitle from "../component/HeadTitle"
import "../css/headtitle.css"

export default function Menu() {
  return (
    <CenterWrapper>
      <HeadTitle>
        <p className="head-title-text">メニュー</p>
        <div className="head-image">
        <img src="https://images7.alphacoders.com/129/thumbbig-1299888.webp" alt="itachi" className="head-image"/>
        </div>
        <p className="head-title-text">メイジ</p>
      </HeadTitle>
    </CenterWrapper>
  );
}
