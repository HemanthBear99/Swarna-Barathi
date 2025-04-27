import Logo from '@/assets/images/logo.webp';
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} width={40} height={40} alt="School Logo" />
              <h3 className="text-xl font-bold">
                Swarna Bharathi Play & High School
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering minds and building futures through quality education
              since 1998.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/swarna_bharathi_highschool/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Academic Programs', to: '/courses' },
                { label: 'Admissions', to: '/admission' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                SCB Nagar, NH 30, Ramavaram, Telangana 507118
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a
                  href="tel:+917330955923"
                  className="hover:text-white transition"
                >
                  7330955923
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a
                  href="mailto:swarnabharathikgm@gmail.com"
                  className="hover:text-white transition"
                >
                  swarnabharathikgm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} />
                Mon-Sat: 8:30 AM - 5:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Swarna Bharathi Play & High School. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
