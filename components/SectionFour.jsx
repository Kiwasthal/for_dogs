import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperCard = ({ url }) => {
  return (
    <div className="w-3/4 p-4 flex flex-col bg-gray-50 shadow-xl hover:shadow-2xl justify-center items-center transition-all duration-500">
      <div className="relative">
        <img src="/images/section_1.jpg" alt="" />
        <h2 className="absolute text-4xl font-bold text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Milky
        </h2>
      </div>
      <div className="w-full">
        <p className="text-right  text-sm mt-2 text-yellow-500 font-bold">
          2 years old, medium sized
        </p>

        <p className="p-4 text-sm leading-5 text-gray-800 font-bold text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          explicabo qui ipsum ad
        </p>

        <p className="p-4 leading-5 text-sm text-gray-800 font-bold text-center">
          Once she trusts you she will follow you around everywhere.
        </p>
      </div>
    </div>
  );
};

const SectionFour = ({ passRef }) => {
  return (
    <div
      className="w-full bg-yellow-400 h-screen flex flex-col justify-start px-12 pt-12 gap-24 border-y-2 border-black"
      ref={passRef}
    >
      <h1 className="text-center font-extrabold text-7xl text-white">
        Adopt a pet today!
      </h1>
      <Swiper
        modules={[Navigation]}
        className="w-full "
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          740: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <SwiperCard />
        </SwiperSlide>
        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default SectionFour;
