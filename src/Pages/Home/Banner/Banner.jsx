import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
            <div className="absolute w-full md:w-1/2 z-10 top-1/2 -translate-y-1/2 text-gray-50 p-9">
              <h1 className="text-4xl font-semibold mb-3 leading-snug">
              Unleash Your Creativity <br /> with Ralph Crafts Pottery <br /> at <span className=" p-1 bg-gray-800 rounded-lg bg-opacity-50">Our Summer Camp</span>
              
              </h1>
              <p className="mb-4 text-gray-800 font-semibold">Embrace the art of pottery and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.</p>
              <button className="btn hover:text-black bg-red-800 border-0 text-white">Learn More</button>
            </div>
            <img className="object-cover" src={banner1} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative w-full h-[34.375rem]">
          <div className="absolute w-full md:w-1/2 z-10 top-1/2 -translate-y-1/2 text-gray-50 p-9">
              <h1 className="text-4xl font-semibold mb-3 leading-snug">
              Unleash Your Creativity <br /> with Ralph Crafts Drawings
              <br /> at <span className=" p-1 bg-gray-800 rounded-lg bg-opacity-50">Our Summer Camp</span>
              </h1>
              <p className="mb-4 text-gray-800 font-semibold">Embrace the art of drawing and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.</p>
              <button className="btn hover:text-black bg-red-800 border-0 text-white">Learn More</button>
            </div>
            <img className="object-cover" src={banner2} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative w-full h-[34.375rem]">
          <div className="absolute w-full md:w-1/2 z-10 top-1/2 -translate-y-1/2 text-gray-50 p-9">
              <h1 className="text-4xl font-semibold mb-3 leading-snug">
              Unleash Your Creativity <br /> with Ralph Crafts Origami
              <br /> at <span className=" p-1 bg-gray-800 rounded-lg bg-opacity-50">Our Summer Camp</span>
              </h1>
              <p className="mb-4 text-gray-800 font-semibold">Embrace the art of origami and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.</p>
              <button className="btn hover:text-black bg-red-800 border-0 text-white">Learn More</button>
            </div>
            <img className="object-cover" src={banner3} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative w-full h-[34.375rem]">
          <div className="absolute w-full md:w-1/2 z-10 top-1/2 -translate-y-1/2 text-gray-50 p-9">
              <h1 className="text-4xl font-semibold mb-3 leading-snug">
              Unleash Your Creativity <br /> with Ralph Crafts Life Hacks
              <br /> at <span className=" p-1 bg-gray-800 rounded-lg bg-opacity-50">Our Summer Camp</span>
              </h1>
              <p className="mb-4 text-gray-800 font-semibold">Embrace the art of Life Hacks and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.</p>
              <button className="btn hover:text-black bg-red-800 border-0 text-white">Learn More</button>
            </div>
            <img className="object-cover" src={banner4} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative w-full h-[34.375rem]">
          <div className="absolute w-full md:w-1/2 z-10 top-1/2 -translate-y-1/2 text-gray-50 p-9">
              <h1 className="text-4xl font-semibold mb-3 leading-snug">
              Unleash Your Creativity <br /> with Ralph Crafts Clay Arts
              <br /> at <span className=" p-1 bg-gray-800 rounded-lg bg-opacity-50">Our Summer Camp</span>
              </h1>
              <p className="mb-4 text-gray-800 font-semibold">Embrace the art of Clay Arts and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.</p>
              <button className="btn hover:text-black bg-red-800 border-0 text-white">Learn More</button>
            </div>
            <img className="object-cover" src={banner5} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
