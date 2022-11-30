import React from 'react';

function Hero({ passRef, heroRef }) {
  return (
    <div
      className="w-full h-screen bg-center bg-main  bg-fill lg:bg-center  md:bg-cover  bg-sec border-y-2 border-black"
      ref={passRef}
    >
      <h1
        className="
          ml-6 sm:ml-12 xl:ml-32 mt-12 md:mt-40 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
        ref={heroRef}
      >
        STAY FOR STRAYS BY TEENS
      </h1>
      <span className="h-2 w-full"></span>
    </div>
  );
}

export default Hero;
