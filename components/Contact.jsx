const Contact = ({ passRef }) => {
  return (
    <section
      ref={passRef}
      className="w-full h-screen lg:h-[80vh]  px-4 gap-0 md:gap-8  xl:gap-12 lg:px-8 2xl:px-56 flex flex-col border-y-2
    items-center md:items-start justify-center bg-white border-black overflow-hidden relative"
    >
      <h1 className="mb-8 md:mb-0 text-orange-400 text-2xl text-center font-extrabold md:text-5xl">
        Contact Us
      </h1>
      <div className="flex w-full  text-orange-400 gap-4 lg:gap-32 items-start flex-col lg:flex-row ">
        <p className="text-justify text-sm md:text-xl w-full lg:w-1/3">
          Send us an email only if you want to be involved and initiate the
          activity in your school. For adoptions, please directly contact the
          mobile number we indicate for each dog. A volunteer or an associate of
          the NGO who host the dog will reply and make all arrangements for the
          adoption.
        </p>
        <div className="w-full lg:w-2/5">
          <form action="#">
            <input
              type="text"
              className="w-full bg-orange-100 p-2 text-orange-400 placeholder:text-orange-300 text-xl mb-4 focus:outline-1 focus:outline-gray-400"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full bg-orange-100 p-2 text-orange-400 placeholder:text-orange-300 text-xl mb-4 focus:outline-1 focus:outline-gray-400"
              placeholder="E-mail"
            />
            <textarea
              type="text"
              className="w-full h-28 bg-orange-100 p-2 text-orange-400 placeholder:text-orange-300 text-xl mb-4 focus:outline-1 focus:outline-gray-400 resize-none"
              placeholder="Message"
            />
            <button className="px-4 py-2 bg-orange-100 font-bold text-orange-400 text-xl transition-all duration-500 hover:bg-gray-300 hover:text-white">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
