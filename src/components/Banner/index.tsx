import MainSwiper from "../Swiper/MainSwiper";
import { BannerList } from "../../__mocks__/bannerList";

const Banner = () => {
  return <MainSwiper itemList={BannerList} />;
};

export default Banner;
