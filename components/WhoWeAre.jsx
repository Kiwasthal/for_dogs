import React from 'react';

function WhoWeAre({ passRef, heroRef }) {
  console.log(heroRef);
  return (
    <div
      className="w-full h-screen bg-main bg-cover flex items-center bg-sec"
      ref={passRef}
    >
      <div
        className="w-full ml-56 font-bold text-[120px] text-white"
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

export default WhoWeAre;
