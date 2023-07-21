import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';
import SectionHeader from "../../../components/SectionHeader";
import Instructor from "../../../components/Instructor";
import {  FreeMode, Navigation, Virtual } from "swiper";
import Loader from "../../../components/utilities/Loader";

const PopularInstructors = () => {
  const { data: instructors = [],isLoading } = useQuery(["instructors"], async () => {
    //const limit = 6; // Define the limit variable
    const response = await fetch(`https://ralph-crafts-server.vercel.app/users/instructors?limit=6`);
    const data = await response.json();
    return data;
  });
  if(isLoading)return <Loader></Loader>
  return (
    <div className="px-8 pb-20">
     <SectionHeader header="Pick Your Instructor" description="Try from our Best of the Best Instructor for your learning journey"></SectionHeader>
      <Swiper

      grabCursor={true}
      loop={true}
      modules={[Virtual, FreeMode, Navigation]}
      virtual
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 90,
        },
      
      }}
      className="mySwiper mx-auto"
    >
      {instructors.map((instructor, index) => (
        <SwiperSlide key={instructor} virtualIndex={index}>
          <Instructor instructor={instructor}></Instructor>
        </SwiperSlide>
      ))}
    </Swiper>
      
    </div>
  );
};

export default PopularInstructors;
