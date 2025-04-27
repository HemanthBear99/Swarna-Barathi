import logo from '@/assets/images/logo.webp';
import { cn } from '@/lib/utils';
import '@/styles/fonts.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
  emoji: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/', emoji: '🏠' },
  { name: 'About', path: '/about', emoji: '📚' },
  { name: 'Courses', path: '/courses', emoji: '🎨' },
  { name: 'Gallery', path: '/gallery', emoji: '📸' },
  { name: 'Contact', path: '/contact', emoji: '📞' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      !target.closest('button')
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize, { passive: true });
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, handleClickOutside, handleResize]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleLogoError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = '/fallback-logo.png';
  };

  return (
    <header
      className={cn(
        'fixed z-50 w-full transition-all duration-300 ease-in-out bg-white',
        isScrolled ? 'shadow-md py-2' : 'py-3'
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center flex-1">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Home"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="Swarna Bharathi Play & High School Logo"
                width={48}
                height={48}
                loading="eager"
                onError={handleLogoError}
                className="rounded-full shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col flex-1">
                <span className="font-[Merriweather,serif] text-2xl sm:text-xl lg:text-2xl font-extrabold text-[#1a237e] leading-tight tracking-[0.2em] w-full">
                  Swarna Bharathi
                </span>
                <span className="font-montserrat text-xs sm:text-sm lg:text-sm font-bold leading-tight tracking-[0.15em]">
                  Play & High School
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-gray-600 hover:text-blue-600 font-medium transition-all duration-300',
                  location.pathname === link.path &&
                    'text-blue-600 font-semibold'
                )}
                aria-current={
                  location.pathname === link.path ? 'page' : undefined
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Apply for admission"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div ref={menuRef}>
          <nav
            id="mobile-menu"
            className={cn(
              'fixed left-0 right-0 top-[72px] z-40 transform bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden',
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
            )}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300',
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  )}
                  aria-current={
                    location.pathname === link.path ? 'page' : undefined
                  }
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admission"
                onClick={closeMenu}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Apply for admission"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
