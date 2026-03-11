import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prism Detailing Logo" className="h-32 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-slate-900">PRISM <span className="text-primary">DETAILING</span></span>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mt-0.5">Mobile Car Care</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/services" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">Services</Link>
          <Link to="/gallery" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">Gallery</Link>
          <Link to="/reviews" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">Reviews</Link>
          <Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
          >
            Book Now
          </Link>
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <span className="material-symbols-outlined">menu</span>}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-primary/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-bold hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-lg font-bold text-white shadow-lg shadow-primary/30"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
