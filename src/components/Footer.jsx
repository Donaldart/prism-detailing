import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 lg:px-20 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Prism Detailing Logo" className="h-32 w-auto" />
            </div>
            <p className="text-slate-500 leading-relaxed">
              The city's premier mobile car detailing service. Delivering luxury results with mobile convenience since 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Pricing & Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Service Area</h3>
            <ul className="space-y-4 text-slate-400">
              <li>Downtown & Metro</li>
              <li>Westside Heights</li>
              <li>Lakeside District</li>
              <li>Corporate Campus</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined">location_on</span>
              <span data-location="Los Angeles">Los Angeles, CA</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">phone</span> (555) 123-4567</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">mail</span> hello@prismdetailing.com</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">schedule</span> Mon - Sat: 8am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Prism Detailing. All rights reserved. Made with ✨ for car lovers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
