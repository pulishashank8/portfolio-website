import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer"
          >
            SP
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <SocialLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900/80 backdrop-blur-sm rounded-lg mt-2">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <MobileNavLinks closeMenu={() => setMobileMenuOpen(false)} />
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-700">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks: React.FC = () => {
  const links = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'expertise', label: 'Expertise' },
    { to: 'internships', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-gray-200 hover:text-cyan-400 transition-colors duration-200 cursor-pointer font-bold"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const links = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'expertise', label: 'Expertise' },
    { to: 'internships', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 cursor-pointer"
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

const SocialLinks: React.FC = () => (
  <>
    <a
      href="https://github.com/pulishashank8"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label="GitHub"
    >
      <Github className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/in/shashank-puli/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </>
);

export default Header;
