import React from 'react';

function HowWeDoIt({ passRef }) {
  console.log(passRef);
  return (
    <div className=" w-full h-screen  bg-cover" ref={passRef}>
      <div className="flex flex-col lg:flex-row items-center w-full h-full ">
        <div className="h-2/5 text-white w-full flex  flex-col items-start text-5xl justify-start gap-8">
          <p className="w-3/4">Who we are</p>
          <p className="text-2xl w-4/5  text-left">
            We are kids and teenagers who work with stray animals protection
            NGOs and try to find in our schools families who would like to adopt
            a stray animal and change theirs and the animal life. The initiative
            was founded by Ines Saltiel -a student of Campion School in Greece.
            The initiative had its roots in a campaign for stray animals started
            in 2018
          </p>
        </div>
        <div className="w-full shadow-2xl overflow-hidden">
          <img
            src="/images/section_2.jpg"
            className="hover:scale-125  transition-all duration-300"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HowWeDoIt;
