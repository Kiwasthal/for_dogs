import Image from 'next/image';

function SectionOne({ passRef }) {
  return (
    <div
      ref={passRef}
      className="
                w-full h-screen px-4  gap-0 md:gap-8  lg:gap-x-32 lg:px-8 2xl:px-56 grid grid-rows-7  lg:grid-rows-3 lg:grid-cols-2 border-y-2
                 bg-section-one border-black overflow-hidden
                "
    >
      <p className="text-2xl self-center justify-self-center md:text-5xl lg:text-7xl font-bold mb-3 row-start-1 md:row-start-1 md:col-start-1 md:self-end md:justify-self-start">
        Who we are
      </p>
      <p className="text-sm  lg:text-2xl text-justify col-start-1   font-thin row-start-2 row-span-2 md:row-start-2 md:row-span-1 self-center">
        We are kids and teenagers who work with stray animals protection NGOs
        and try to find in our schools families who would like to adopt a stray
        animal and change theirs and the animal life. The initiative was founded
        by Ines Saltiel -a student of Campion School in Greece. The initiative
        had its roots in a campaign for stray animals started in 2018
      </p>
      <div className="row-start-6  row-span-2  self-start md:row-start-3">
        <p className="text-lg md:text-2xl font-bold mt-2 md:mt-5 text-center self-end">
          OUR PARTNERS
        </p>
        <div className="w-full mt-0 md:mt-5 flex justify-between gap-3 md:gap-0 items-center p-4 md:p-0">
          <a
            href="https://www.dogsvoice.gr/?fbclid=IwAR3CTZadWkdXNVFAsCwULJ0qKukqgnY_fF7J1k8bjsL5FM6YdaO4uQpnhZA"
            target={'_blank'}
            rel="noreferrer"
            className="w-2/3 h-full md:w-2/5"
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
            className="w-2/3 h-full md:w-1/2"
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
      <div className="w-2/3 md:w-2/4 justify-self-center lg:w-full shadow-2xl overflow-hidden col-start-1 md:col-start-2  row-start-4 row-span-2 md:row-span-3 self-center">
        <Image
          src="/images/section_1.jpg"
          className="hover:scale-125  transition-all duration-300"
          alt="puppy lying in grass"
          width={800}
          height={300}
        ></Image>
      </div>
    </div>
  );
}

export default SectionOne;
