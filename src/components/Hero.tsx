import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  default as heroBg,
  default as heroImage,
} from '../assets/images/DSC01492.webp';

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center pt-32 sm:pt-24 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      ></div>

      {/* Decorative elements - Child-friendly shapes */}
      <div
        className="absolute top-20 right-10 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 rounded-full bg-purple-200 blur-3xl opacity-70 animate-float"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 left-10 w-32 sm:w-40 md:w-56 lg:w-72 h-32 sm:h-40 md:h-56 lg:h-72 rounded-full bg-pink-200 blur-3xl opacity-50 animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full bg-yellow-200 blur-3xl opacity-50 animate-float"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      ></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="flex flex-col space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="font-[Merriweather,serif] text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-purple-900">Empowering Minds,</span>
              <span className="block text-pink-600">Building Futures </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                to="/admission"
                className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center group touch-manipulation active:scale-95 child-friendly-button touch-target text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Enroll Now! 🚀
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={16}
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/about"
                className="bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 text-center touch-manipulation active:scale-95 child-friendly-button touch-target text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Explore More! 🎨
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-4">
              <a
                href="https://www.instagram.com/swarna_bharathi_highschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center child-friendly-card p-2 touch-target hover:bg-gray-50 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full p-1.5 sm:p-2 mr-2 wiggle-animation">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium select-none">
                  Instagram
                </span>
              </a>
              <a
                href="https://www.youtube.com/@swarnabharathi329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center child-friendly-card p-2 touch-target hover:bg-gray-50 transition-colors duration-300"
                aria-label="Subscribe to our YouTube channel"
              >
                <div className="bg-red-600 rounded-full p-1.5 sm:p-2 mr-2 wiggle-animation">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium select-none">
                  Youtube
                </span>
              </a>
              <a
                href="https://www.facebook.com/share/19L7T22P1H/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center child-friendly-card p-2 touch-target hover:bg-gray-50 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <div className="bg-blue-600 rounded-full p-1.5 sm:p-2 mr-2 wiggle-animation">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium select-none">
                  Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Desktop image */}
          <div className="hidden lg:block lg:justify-self-end animate-slide-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Happy Students at Swarna Bharathi Play & High School"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                width="1500"
                height="750"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg child-friendly-card">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-600 rounded-full p-1.5 sm:p-2 wiggle-animation">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84 50.57 50.57 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base select-none">
                      100% Success Rate! 🎯
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 select-none">
                      Super Students! 🌟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile image - Enhanced for better mobile experience */}
          <div className="mt-6 sm:mt-8 lg:hidden">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm">
              <img
                src={heroImage}
                alt="Happy Students at Swarna Bharathi Play & High School"
                className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg child-friendly-card">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-600 rounded-full p-1.5 sm:p-2 wiggle-animation">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84 50.57 50.57 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-xs sm:text-sm select-none">
                      100% Success Rate! 🎯
                    </p>
                    <p className="text-xs text-gray-600 select-none">
                      Super Students! 🌟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
