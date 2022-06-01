import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from 'next/image';
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}

      >
       <div>
       <SwiperSlide>
       <img src='/home.png'  alt='Home' className='swip'/>
        </SwiperSlide>
       </div>
        <SwiperSlide>
        <img src='/home.png'  alt='Home' className='swip'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/home.png'  alt='Home' className='swip'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
