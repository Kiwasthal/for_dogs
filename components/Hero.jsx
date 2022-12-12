import React from 'react';

function Hero({ passRef, heroRef }) {
  return (
    <div
      className="w-full h-screen bg-center bg-main  bg-fill lg:bg-center  md:bg-cover  bg-sec border-y-2 border-black"
      ref={passRef}
    >
      <h1
        className="
          ml-6 sm:ml-12 xl:ml-20 mt-28 md:mt-60 font-bold text-lg sm:text-3xl md:text-4xl lg:text-7xl tracking-widest text-white"
        ref={heroRef}
      >
        STAY FOR STRAYS <span className="text-amber-400"> BY TEENS</span>
      </h1>
      <span className="h-2 w-full"></span>
    </div>
  );
}

export default Hero;
