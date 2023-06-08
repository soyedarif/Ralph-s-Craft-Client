// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Pagination } from "swiper";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <figure className="relative w-full h-[34.375rem]">
            <img className="object-cover" src={banner1} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="relative w-full h-[34.375rem]">
            <img className="object-cover" src={banner2} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="relative w-full h-[34.375rem]">
            <img className="object-cover" src={banner3} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="relative w-full h-[34.375rem]">
            <img className="object-cover" src={banner4} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative w-full h-[34.375rem]">
            <img className="object-cover" src={banner5} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
