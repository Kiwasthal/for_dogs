function SectionThree({ passRef }) {
  return (
    <div
      ref={passRef}
      className="
                px-4 w-full h-screen   lg:h-screen gap-0 md:gap-8 xl:gap-40 lg:px-8 2xl:px-56 grid lg:grid-cols-2 border-y-2
                items-center justify-center bg-orange-300 border-black overflow-hidden
                "
    >
      <div className="md:w-3/4 justify-self-center lg:w-full text-black  flex  flex-col items-center lg:items-start text-2xl lg:text-5xl justify-start gap-3">
        <p className="text-2xl md:text-5xl lg:text-6xl font-bold">
          How you can Help
        </p>
        <p className="text-sm  lg:text-2xl text-justify font-thin">
          If you are a student in Europe join us. Through the NGOs we work, we
          may send the stray animal anywhere in Europe after they do, of course,
          the proper checking. We will be sending you every month the
          information of one dog. If that dog is adopted, the NGOs will direct
          the interested family to another one.
        </p>
      </div>
      <div className="w-full self-start md:self-auto lg:w-full shadow-2xl overflow-hidden">
        <img
          src="/images/section_3.jpg"
          className="hover:scale-125  transition-all duration-300 "
        ></img>
      </div>
    </div>
  );
}

export default SectionThree;
