function SectionOne({ passRef }) {
  return (
    <div
      ref={passRef}
      className="
                w-full h-[80vh] lg:h-screen px-0 gap-0 md:gap-8 lg:px-8 2xl:px-56 grid lg:grid-cols-2 border-y-2
                items-center justify-center bg-section-one border-black overflow-hidden
                "
    >
      <div className="md:w-3/4 justify-self-center lg:w-full text-black  flex  flex-col items-center lg:items-start text-2xl lg:text-5xl justify-start gap-3">
        <p className="text-5xl lg:text-5xl">Who we are</p>
        <p className="text-lg  lg:text-2xl text-center  lg:text-left">
          We are kids and teenagers who work with stray animals protection NGOs
          and try to find in our schools families who would like to adopt a
          stray animal and change theirs and the animal life. The initiative was
          founded by Ines Saltiel -a student of Campion School in Greece. The
          initiative had its roots in a campaign for stray animals started in
          2018
        </p>
      </div>
      <div className="w-3/4 justify-self-center lg:w-full shadow-2xl overflow-hidden">
        <img
          src="/images/section_1.jpg"
          className="hover:scale-125  transition-all duration-300 "
        ></img>
      </div>
    </div>
  );
}

export default SectionOne;
