// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'anne smith',
    position: 'art enthusiast',
    message:
      'good job, went through his portfolio and got six great paintings, very inspirational work you have here!',
  },
  {
    image: '/t-avt-2.png',
    name: 'jane doe',
    position: 'customer',
    message:
      'amazing work, great portfolio, i bought three of his paintings last month and ive been getting compliments ever since, keep it up!',
  },
  {
    image: '/t-avt-3.png',
    name: 'john doe',
    position: 'artist',
    message:
      'what an amazing artist, i love his works and always wondered how he creates stuff!',
  },
];

import { Navigation, Pagination } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaQuoteLeft } from 'react-icons/fa';  

// data

const TestimonialSlider = () => {
  return(
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={{Navigation, Pagination}}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-ccenter">
                <div className="mb-2 mx-auto">
                <Image src={person.image} alt="" width={100} height={100} />
                </div>
              <div className="text-lg">{person.name}</div>
              <div className="text-[12px] font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
              </div>
              <div className="xl:text-lg text-center md:text-left">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
