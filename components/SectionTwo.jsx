import React from 'react';

function SectionTwo({ passRef }) {
  return (
    <div
      ref={passRef}
      className="
                w-full h-screen lg:h-screen px-4 md:px-0 gap-0 md:gap-8 xl:gap-40 lg:px-8 2xl:px-56 grid lg:grid-cols-2 border-y-2
                items-center justify-center bg-yellow-200 border-black overflow-hidden
              "
    >
      <div className="w-full self-start md:self-auto md:w-3/4 justify-self-center lg:w-full shadow-2xl overflow-hidden">
        <img
          src="/images/section_2.jpg"
          className="hover:scale-125  transition-all duration-300 "
        ></img>
      </div>
      <div className="row-start-1  md:w-3/4 justify-self-center lg:w-full text-black  flex  flex-col items-center lg:items-start text-2xl lg:text-5xl justify-start gap-3">
        <p className=" text-2xl md:text-5xl lg:text-6xl font-bold">
          How we do it
        </p>
        <p className="text-sm  lg:text-2xl text-justify font-thin">
          Anyway, we can. We tell the story of our strays. We put posters in our
          schools, we work with our teachers to include our dogs in the school
          newsletters, we use our social media to reach out and most of all we
          speak to our fellow students and explain the benefits of adoption a
          stray.
        </p>
      </div>
    </div>
  );
}

export default SectionTwo;
