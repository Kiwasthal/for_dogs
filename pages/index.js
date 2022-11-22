import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Contact from '../components/Contact';

export default function Home() {
  const { ref, inView } = useInView();
  const sectionHeroRef = useRef(null);
  const sectionFirstRef = useRef(null);
  const sectionSecondRef = useRef(null);
  const sectionThirdRef = useRef(null);
  const sectionFourthRef = useRef(null);
  const sectionContactRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => setIsClicked(!isClicked);

  const customClass = !isClicked ? 'translate-x-96' : 'translate-x-0';

  return (
    <div className="w-full">
      <Navbar
        heroInView={inView}
        heroRef={sectionHeroRef}
        firstRef={sectionFirstRef}
        secondRef={sectionSecondRef}
        thirdRef={sectionThirdRef}
        fourthRef={sectionFourthRef}
        contactRef={sectionContactRef}
        toggleClicked={toggleClicked}
      />
      <div
        className={`block md:hidden p-4 border-black border-l-4 fixed right-0 ${customClass} h-screen w-2/5  transition-all duration-300 shadow-2xl bg-yellow-500 z-40`}
      >
        <ul className="text-xl h-full w-full flex flex-col text-white items-center justify-evenly text-center font-bold">
          <li
            onClick={() => {
              sectionFirstRef.current.scrollIntoView({
                behavior: 'smooth',
              });
              setIsClicked(false);
            }}
          >
            Who we are
          </li>
          <li
            className="link"
            onClick={() => {
              sectionSecondRef.current.scrollIntoView({
                behavior: 'smooth',
              });
              setIsClicked(false);
            }}
          >
            How we do it
          </li>
          <li
            className="link"
            onClick={() => {
              sectionThirdRef.current.scrollIntoView({
                behavior: 'smooth',
              });
              setIsClicked(false);
            }}
          >
            How you can help
          </li>
          <li
            className="link"
            onClick={() => {
              sectionFourthRef.current.scrollIntoView({
                behavior: 'smooth',
              });
              setIsClicked(false);
            }}
          >
            Animal of the month
          </li>
          <li
            className="link"
            onClick={() => {
              sectionContactRef.current.scrollIntoView({
                behavior: 'smooth',
              });
              setIsClicked(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      <Hero passRef={sectionHeroRef} heroRef={ref} />
      <SectionOne passRef={sectionFirstRef} />
      <SectionTwo passRef={sectionSecondRef} />
      <SectionThree passRef={sectionThirdRef} />
      <SectionFour passRef={sectionFourthRef} />
      <Contact passRef={sectionContactRef} />
      {/* //How you can help/ */}
      {/* //The animal of the month/ */}
    </div>
  );
}
