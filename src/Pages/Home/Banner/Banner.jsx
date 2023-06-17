import Lottie from "lottie-react";
import bannerImage from "../../../assets/Banner-11.png";
import bannerImage2 from "../../../assets/banner-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex flex-wrap items-center  md:h-[80vh] pt-20 md:pt-0 px-8 ">
          <div className=" md:w-1/2 md:px-16 order-2 md:order-1">
            <h1 className="text-3xl uppercase font-bold text-gray500 ">
              Learning A Language is Easier!
            </h1>
            <p className="md:pr-10 py-5 text-justify">
              You understand what the goals of a nation are as you learn tales behind the language. That's when a society starts to understand you. You can learn, hear and reflect about a culture, but hearing its natural language is the best way to profoundly understand a culture.
            </p>
            <button className="btn btn-error mr-5 text-white hover:bg-slate-950">Join For Free</button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img src={bannerImage} alt="pic" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-wrap items-center  md:h-[80vh] pt-20 md:pt-0 px-8 ">
          <div className=" md:w-1/2 md:px-16 order-2 md:order-1">
            <h1 className="text-3xl uppercase font-bold text-gray500 ">
              All Country Language Learning !
            </h1>
            <p className="md:pr-10 py-5 text-justify">
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <button className="btn btn-error mr-5 text-white hover:bg-slate-950">
              Get Free Trial Lesson
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img className="rounded-full" src={bannerImage2} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
