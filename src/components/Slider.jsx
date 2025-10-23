import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full max-w-11/12 mx-auto mt-10 relative px-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={35} // increased spacing between slides
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 35 },
          1024: { slidesPerView: 3, spaceBetween: 35 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <SwiperSlide key={num}>
            {/* Only padding, no background */}
            <div className="py-10 px-4">
              <div className="w-full h-[29rem] sm:h-96 md:h-[29rem] lg:h-[35rem] overflow-hidden rounded-xl">
                <img
                  src={`/img${num}.jpg`}
                  alt={`Slide ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
