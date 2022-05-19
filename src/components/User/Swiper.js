import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
       <div style={{width:'500px'}}>
       <SwiperSlide>
          <img src='/home.png' alt='Home' className='swip'/>
        </SwiperSlide>
       </div>
        <SwiperSlide>
          <img src='/home.png' className='swip' alt='Home'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/home.png'  className='swip' alt='Home'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
