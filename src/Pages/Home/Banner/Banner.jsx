import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay,  } from "swiper";
import { Autoplay, Pagination, Virtual } from "swiper";

import banner1 from "/src/assets/banner/banner1.jpg";
import banner2 from "/src/assets/banner/banner2.jpg";
import banner3 from "/src/assets/banner/banner3.jpg";
import banner4 from "/src/assets/banner/banner4.jpg";
import banner5 from "/src/assets/banner/banner5.jpg";

const Banner = () => {
  const bannerContents = [
    {
      id: 1,
      src: banner1,
      topic: "Pottery",
    },
    {
      id: 2,
      src: banner2,
      topic: "Drawings",
    },
    {
      id: 3,
      src: banner3,
      topic: "Origami",
    },
    {
      id: 4,
      src: banner4,
      topic: "Life Hacks",
    },
    {
      id: 5,
      src: banner5,
      topic: "Clay Arts",
    },
  ];
  return (
    <div className=" bg-gradient-to-t banner-section from-white dark:from-black via-white dark:via-black dark:to-red-700 to-red-700">
      <div className="max-w-screen-xl mx-auto">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Virtual, Pagination]}
          className="mySwiper text-center md:text-left"
          virtual
        >
          {bannerContents.map((slideContent, i) => (
            <SwiperSlide key={slideContent.id} virtualIndex={i}>
              <div className="flex lg:py-20 flex-col md:flex-row h-full w-full gap-2 p-4 md:gap-8 justify-center items-center mb-14">
              <div className="w-full  md:w-1/2 glass p-3">
                  <img className="object-cover mx-auto w-[37.5rem] h-[24.938rem]" src={slideContent.src} alt="" />
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-4xl tracking-tight text-gray-100 font-semibold mb-3 leading-none md:leading-tight">
                    Unleash Your Creativity <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DA4453] to-[#D71D24]">Ralph Crafts {slideContent.topic}</span>
                  </h1>
                  <p className="mb-4 dark:text-gray-300 text-gray-700 font-medium">
                    Embrace the art of <span className="text-transparent bg-clip-text font-bold bg-gradient-to-b from-[#DA4453] to-[#D71D24]">{slideContent.topic}</span> and more with Ralph Crafts. Let your creativity soar to new heights under the expert guidance of our dedicated instructors. Join us today and embark on an unforgettable artistic journey that will leave a lasting impression.
                  </p>
                  <button className="btn hover:scale-105 duration-200 border-0 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-white">Learn More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
