import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const images = [
    "https://i.ibb.co.com/21nhqyqV/cover4.jpg",
    "https://i.ibb.co.com/yBpDyxkK/cover3.jpg",
    "https://i.ibb.co.com/1JZ0YJsn/cover2.jpg",
    "https://i.ibb.co.com/Vchsp0YD/cover1.webp",
    "https://i.ibb.co.com/dwSh89wd/3.jpg",
    "https://i.ibb.co.com/LzNDtg5m/2.jpg",
    "https://i.ibb.co.com/S4dS6BJM/1.jpg",
  ];

  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
