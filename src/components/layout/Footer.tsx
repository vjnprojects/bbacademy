import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bba-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Beyond Barista Academy</h3>
            <p className="text-gray-300 mb-4">
              Rwanda's premier hospitality training center offering world-class barista, bartending, and sommelier training.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-bba-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-bba-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-bba-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-bba-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">Training Programs</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">Barista Training</Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">Bartending & Mixology</Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">Sommelier Course</Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">Job Placement Assistance</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Kigali, Rwanda</p>
              <p className="mb-2">Email: info@beyondbarista.rw</p>
              <p className="mb-2">Phone: +250 798 123 456</p>
            </address>
            <Link to="/contact" className="inline-block mt-2 text-bba-gold hover:underline">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Beyond Barista Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Developer Portfolio & Socials */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-gray-400">Website developed by <a href="https://www.linkedin.com/in/niyitegeka-bosco" target="_blank" rel="noopener noreferrer" className="text-bba-gold hover:underline">Niyitegeka Bosco</a></span>
          <div className="flex space-x-3 mt-1 md:mt-0">
            <a href="https://x.com/niyitegekabilly" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bba-gold transition-colors" title="X (Twitter)">
              <Twitter size={18} />
            </a>
            <a href="https://facebook.com/bosco.niyitegeka" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bba-gold transition-colors" title="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/niyitegeka_bosco" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bba-gold transition-colors" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/niyitegeka-bosco" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bba-gold transition-colors" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.tiktok.com/@Boss-ko" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bba-gold transition-colors" title="TikTok">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2.25h2.25a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.5v5.25a6.75 6.75 0 1 1-6.75-6.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 3 3 0 1 0 3 3v-9a.75.75 0 0 1 .75-.75z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
