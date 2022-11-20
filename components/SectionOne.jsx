import Image from 'next/image';

function SectionOne({ passRef }) {
  return (
    <div
      ref={passRef}
      className="
                w-full h-[80vh] lg:h-screen px-0 gap-0 md:gap-8  lg:gap-14  lg:px-8 2xl:px-56 grid lg:grid-cols-2 border-y-2
                items-center justify-center bg-section-one border-black overflow-hidden
                "
    >
      <div className="md:w-3/4 justify-self-center lg:w-full text-black  flex  flex-col items-center lg:items-start text-2xl lg:text-5xl justify-start gap-3">
        <p className="text-5xl lg:text-7xl font-bold mb-3">Who we are</p>
        <p className="text-lg  lg:text-2xl text-center  lg:text-justify font-thin">
          We are kids and teenagers who work with stray animals protection NGOs
          and try to find in our schools families who would like to adopt a
          stray animal and change theirs and the animal life. The initiative was
          founded by Ines Saltiel -a student of Campion School in Greece. The
          initiative had its roots in a campaign for stray animals started in
          2018
        </p>
        <p className="text-2xl font-bold mt-5 ">OUR PARTNERS</p>
        <div className="w-full mt-5 flex justify-between items-center">
          <a
            href="https://www.dogsvoice.gr/?fbclid=IwAR3CTZadWkdXNVFAsCwULJ0qKukqgnY_fF7J1k8bjsL5FM6YdaO4uQpnhZA"
            target={'_blank'}
            rel="noreferrer"
            className="w-full h-full md:w-2/5"
          >
            <Image
              className="w-full"
              src={'/images/dogs_voice_logo.png'}
              alt="dogs voice logo && hyperlink"
              width={300}
              height={100}
            />
          </a>
          <a
            href="https://www.costanavarino.com/news/costanavarino/take-me-home/?fbclid=IwAR1FEbPaLRkNjvD7SRw9VmCeVsQiuH1ffKVs9DPHAfe9j7O1uuolH9l0wbI"
            target={'_blank'}
            rel="noreferrer"
            className="w-full h-full md:w-1/2"
          >
            <Image
              className="w-full"
              src={'/images/navarino_pet_community.jpg'}
              alt="dogs voice logo && hyperlink"
              width={300}
              height={100}
            />
          </a>
        </div>
      </div>
      <div className="w-2/4 justify-self-center lg:w-full shadow-2xl overflow-hidden">
        <Image
          src="/images/section_1.jpg"
          className="hover:scale-125  transition-all duration-300 "
          alt="puppy lying in grass"
          width={800}
          height={300}
        ></Image>
      </div>
    </div>
  );
}

export default SectionOne;
