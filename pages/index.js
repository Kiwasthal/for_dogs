import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import HowWeDoIt from '../components/HowWeDoIt';
import HowYouCanHelp from '../components/HowYouCanHelp';
import Navbar from '../components/Navbar';
import WhoWeAre from '../components/WhoWeAre';

export default function Home() {
  const { ref, inView } = useInView();
  const sectionFirstRef = useRef(null);
  const sectionSecondRef = useRef(null);
  const sectionThirdRef = useRef(null);
  const sectionFourthRef = useRef(null);

  return (
    <div className="w-screen overflow-hidden">
      <Navbar
        heroInView={inView}
        firstSectionRef={sectionFirstRef}
        secondSectionRef={sectionSecondRef}
        thirdSectionRef={sectionThirdRef}
      />
      <WhoWeAre passRef={sectionFirstRef} heroRef={ref} />
      <div className="w-full  bg-amber-600 flex items-center justify-center flex-col px-0 xl:px-64">
        <HowWeDoIt passRef={sectionSecondRef} />
      </div>
      {/* //How you can help/ */}
      <div className="w-full  bg-gradient-to-b from-amberlike to-amber-600 flex items-center justify-center flex-col px-0 xl:px-64">
        <HowYouCanHelp passRef={sectionThirdRef} />
      </div>
      {/* //The animal of the month/ */}
    </div>
  );
}
