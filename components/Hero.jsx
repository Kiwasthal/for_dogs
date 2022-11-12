import React from 'react';

function Hero({ passRef, heroRef }) {
  return (
    <div
      className="w-full h-screen bg-center bg-main  bg-fill lg:bg-center  md:bg-cover flex items-center bg-sec border-y-2 border-black"
      ref={passRef}
    >
      <div
        className="w-full ml-8 lg:ml-24 xl:ml-56 font-bold  text-7xl md:text-8xl lg:text-9xl text-white"
        ref={heroRef}
      >
        <p className=" ">STAY </p>
        <p> FOR STRAYS </p>
        <p>BY TEENS</p>
      </div>
      <span className="h-2 w-full"></span>
    </div>
  );
}

export default Hero;
