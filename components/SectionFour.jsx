import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperCard = ({ url, name, desc, text, subtext }) => {
  return (
    <div className="w-4/5  md:w-3/4  p-2  flex flex-col bg-gray-50 shadow-xl hover:shadow-2xl justify-start items-center transition-all duration-500">
      <div className="relative w-full md:w-3/4">
        <img className="w-full  h-80 sm:h-56 xl:h-80" src={url} alt={name} />
        <h2 className="absolute text-4xl font-bold text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {name}
        </h2>
      </div>
      <div className="w-full items-center flex flex-col">
        <p className="text-center text-[10px] md:text-sm mt-2 text-yellow-500 font-bold w-2/3">
          {desc}
        </p>
        <p className="p-0 text-[10px] md:p-4 md:text-[14px] text-gray-800 font-bold text-center">
          {text}
        </p>
        <p className="p-1 md:p-4 text-[10px] leading-3 md:leading-4 text-sm md:text-[0.6rem]  text-gray-800 font-bold text-center">
          {subtext}
        </p>
      </div>
    </div>
  );
};

const SectionFour = ({ passRef }) => {
  return (
    <div
      className="w-full bg-yellow-400 h-screen flex flex-col px-4 md:px-12 pt-12 gap-4 md:gap-8 border-y-2 border-black"
      ref={passRef}
    >
      <h1 className="text-2xl text-center font-extrabold md:text-7xl text-white">
        Adopt a pet today!
      </h1>
      <Swiper
        modules={[Navigation]}
        className="w-full "
        spaceBetween={5}
        slidesPerView="auto"
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
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="grid justify-items-center">
          <SwiperCard
            url={'/images/swiper_1.jpg'}
            name={'Milky'}
            desc={'2 years old, medium sized'}
            text={
              "Milky loves beeing around people and having all the attention to herself and that's the reason she will be best in a home as the only pet. She enjoys  running and going to the beach as much she adores the attention."
            }
            subtext={
              'Once she trusts you she will follow you around everywhere.'
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <SwiperCard
            url={'/images/swiper_2.jpg'}
            name="Tonia"
            desc=" 10 months old, medium sized (20 kilos)"
            text=" Tonia is sweet, she likes to play but she is  calm and loves cuddles. She is very friendly will other dogs and very good with kids. Tonia never had a home; she was abandoned at very early age."
            subtext={
              " Although a bit shy at the beginning with strangers, it doesn't take long for her to trust you and come to you for cuddles and scratches."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <SwiperCard
            url={'/images/swiper_3.jpg'}
            name="Rosie"
            desc={'9 months, small sized will not grow over 15 kilos'}
            text="Rosie was found with a broken leg. She got a successful surgery, she is able to walk, run and play without pain."
            subtext={
              ' Rosie is a shy, sensitive and sweet dog. She enjoys playing with the other dogs. She loves getting cuddles and kisses and gives many back too!'
            }
          />
        </SwiperSlide>

        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default SectionFour;
