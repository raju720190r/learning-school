import Lottie from "lottie-react";
import bannerImage from "../../../assets/103084-new-yoga.json";
import bannerImage2 from "../../../assets/40594-young-woman-meditating-in-yoga-tree-pose.json";
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
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <button className="btn btn-error mr-5 text-white hover:bg-slate-950">Join For Free</button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Lottie
              className="md:h-[80vh]"
              animationData={bannerImage}
              loop={true}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-wrap items-center  md:h-[80vh] pt-20 md:pt-0 px-8 ">
          <div className=" md:w-1/2 md:px-16 order-2 md:order-1">
            <h1 className="text-3xl uppercase font-bold text-gray500 ">
              Yogashala Studio
            </h1>
            <p className="md:pr-10 py-5 text-justify">
              Yoga offers numerous benefits for women, including increased
              flexibility, strength, and balance. It promotes stress reduction,
              hormonal balance, and improved menstrual health. Regular practice
              can enhance fertility, support healthy pregnancies, and aid in
              postpartum recovery. Additionally, yoga cultivates body
              positivity, self-acceptance, and a deeper connection to one is
              body and inner self.
            </p>
            <button className="btn-color px-4 py-3 rounded-lg dark:text-white">
              Get Free Trial Lession
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Lottie
              className="md:h-[80vh]"
              animationData={bannerImage2}
              loop={true}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
