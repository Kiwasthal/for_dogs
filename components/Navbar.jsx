const Navbar = ({
  heroInView,
  firstSectionRef,
  secondSectionRef,
  thirdSectionRef,
}) => {
  const scrollToSection = ref =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  return (
    <nav className={`navbar ${heroInView ? 'text-white' : 'text-black'}`}>
      <ul className="flex font-bold text-2xl w-full justify-between">
        <li className="link" onClick={() => scrollToSection(firstSectionRef)}>
          Who we are
        </li>
        <li className="link" onClick={() => scrollToSection(secondSectionRef)}>
          How we do it
        </li>
        <li className="link" onClick={() => scrollToSection(thirdSectionRef)}>
          How you can help
        </li>
        <li className="link">Animal of the month</li>
        <li className="link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
