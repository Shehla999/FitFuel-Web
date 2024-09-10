import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { FaStar } from "react-icons/fa";

const data = [1, 2, 3, 4, 5, 6, 7];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className=" container mx-auto px-4">
        <h1 className="text-lg  font-extrabold tracking-tight text-black md:text-xl lg:text-2xl">
          What customers say about GREEMIND?
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col border my-10 rounded-md bg-primary">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I&apos;ve found a template that covers all bases
                      for a bootstrapped startup. We were able to launch in
                      days, not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
