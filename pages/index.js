import { useRef } from 'react';
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

  return (
    <div className="w-full">
      <Navbar
        heroInView={inView}
        heroRef={sectionHeroRef}
        firstRef={sectionFirstRef}
        secondRef={sectionSecondRef}
        thirdRef={sectionThirdRef}
        fourthRef={sectionFourthRef}
      />
      <Hero passRef={sectionHeroRef} heroRef={ref} />
      <SectionOne passRef={sectionFirstRef} />
      <SectionTwo passRef={sectionSecondRef} />
      <SectionThree passRef={sectionThirdRef} />
      <SectionFour passRef={sectionFourthRef} />
      <Contact />
      {/* //How you can help/ */}
      {/* //The animal of the month/ */}
    </div>
  );
}
