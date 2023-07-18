import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SectionHeader from "../../../components/SectionHeader";
import Instructor from "../../../components/Instructor";
import { FreeMode, Virtual } from "swiper";
import { useState } from "react";

const PopularInstructors = () => {
  const { data: instructors = [],isLoading } = useQuery(["instructors"], async () => {
    //const limit = 6; // Define the limit variable
    const response = await fetch(`https://ralph-crafts-server.vercel.app/users/instructors`);
    const data = await response.json();
    return data;
  });
  return (
    <div className="px-8 ">
      <SectionHeader header="Pick Your Instructor" description="Try from our Best of the Best Instructor for your learning journey"></SectionHeader>
      <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-4">
        {instructors.map(instructor => (
          <Instructor instructor={instructor} key={instructor._id}></Instructor>
        ))}
      </div>
      {/* <Swiper
      spaceBetween={1}
      slidesPerView={1}
      // centeredSlides={true}
      thumbs={{ swiper: thumbsSwiper }}
      grabCursor={true}
      // loop={true}
      modules={[Virtual,FreeMode]}
      virtual
      // breakpoints={{
      //   639: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      //   767: {
      //     slidesPerView: 2,
      //     spaceBetween: 40,
      //   },
      //   1023: {
      //     slidesPerView: 3,
      //     spaceBetween: 80,
      //   },
      //   1279: {
      //     slidesPerView: 4,
      //     spaceBetween: 200,
      //   },
      // }}
      className="mySwiper text-center"
    >
      {instructors.map((instructor, index) => (
        <SwiperSlide key={instructor} virtualIndex={index}>
          <Instructor instructor={instructor}></Instructor>
        </SwiperSlide>
      ))}
    </Swiper> */}
      
    </div>
  );
};

export default PopularInstructors;
