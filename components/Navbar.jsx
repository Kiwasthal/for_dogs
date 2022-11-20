const Navbar = ({
  heroInView,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef,
  contactRef,
}) => {
  const scrollToSection = ref =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  return (
    <nav className={`navbar ${heroInView ? 'text-white' : 'text-black'}`}>
      <ul className="flex font-bold  text-xs md:text-lg lg:text-2xl w-full justify-between">
        <li className="link" onClick={() => scrollToSection(firstRef)}>
          Who we are
        </li>
        <li className="link" onClick={() => scrollToSection(secondRef)}>
          How we do it
        </li>
        <li className="link" onClick={() => scrollToSection(thirdRef)}>
          How you can help
        </li>
        <li className="link" onClick={() => scrollToSection(fourthRef)}>
          Animal of the month
        </li>
        <li className="link" onClick={() => scrollToSection(contactRef)}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
