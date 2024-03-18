import Card from "../../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Banner } from "../../../interface/index.interface";
import * as S from "./index.styled";

interface IMainSwiper {
  itemList: Banner[];
}

const MainSwiper = ({ itemList }: IMainSwiper) => {
  return (
    <S.SwiperContainer>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {itemList.map((item) => (
          <SwiperSlide key={item.id}>
            <Card cardItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperContainer>
  );
};

export default MainSwiper;
