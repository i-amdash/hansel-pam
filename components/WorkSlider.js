import { Pagination } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsBagCheck } from 'react-icons/bs';  

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/p1.jpeg',
        },
        {
          title: 'title',
          path: '/p2.jpeg',
        },
        {
          title: 'title',
          path: '/p3.jpeg',
        },
        {
          title: 'title',
          path: '/p4.jpeg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/p5.jpeg',
        },
        {
          title: 'title',
          path: '/p6.jpeg',
        },
        {
          title: 'title',
          path: '/p7.jpeg',
        },
        {
          title: 'title',
          path: '/p9.jpeg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return(
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{Pagination}}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return (
              <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image 
                    src={image.path} 
                    width={500}
                    height={500}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:transition-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">
                        new painting
                      </div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        add to cart
                      </div>
                    
                      <div className="text-xl  transition-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsBagCheck />
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
