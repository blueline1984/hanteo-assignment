import MainSwiper from "../Swiper/MainSwiper";

const Banner = () => {
  const BannerList = [
    {
      id: 0,
      imgUrl: "/src/assets/banner_1.png",
      mainText:
        "[M COUNTDOWN]10월 2주차 어쩌고 저쩌고 블라블라블라블라블라블라블라블라",
      subText: "2024.01.01 ~ 2024.01.01 17:00 (KST)",
      buttonText: "투표하기",
    },
    {
      id: 1,
      imgUrl: "/src/assets/banner_1.png",
      mainText:
        "[M COUNTDOWN]10월 2주차 어쩌고 저쩌고 블라블라블라블라블라블라블라블라",
      subText: "2024.01.01 ~ 2024.01.01 17:00 (KST)",
    },
    {
      id: 2,
      imgUrl: "/src/assets/banner_1.png",
      mainText:
        "[M COUNTDOWN]10월 2주차 어쩌고 저쩌고 블라블라블라블라블라블라블라블라",
      subText: "2024.01.01 ~ 2024.01.01 17:00 (KST)",
    },
  ];
  return <MainSwiper itemList={BannerList} />;
};

export default Banner;
