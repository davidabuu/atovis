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
          <div className='swip'>
          <Image src='/home.png' layout='fill' alt='Home'/>
          </div>
        </SwiperSlide>
       </div>
        <SwiperSlide>
        <Image src='/home.png' width={350} height={200} alt='Home' className='swip'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/home.png' width={350} height={200} alt='Home' className='swip'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
