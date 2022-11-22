const Navbar = ({
  heroInView,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef,
  contactRef,
  toggleClicked,
}) => {
  const scrollToSection = ref =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  return (
    <nav className={`navbar ${heroInView ? 'text-white' : 'text-black'}`}>
      <ul className="hidden  md:flex font-bold  text-xs md:text-lg lg:text-2xl w-full justify-between">
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
      <svg
        className="block md:hidden w-8 h-8 absolute right-0  mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleClicked}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </nav>
  );
};

export default Navbar;
