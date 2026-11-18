import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Star, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Events', href: '#events' },
    { name: 'Amenities', href: '#experiences' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full overflow-hidden">
      {/* Top Utility Bar (Desktop only, slim luxury strip in deep maroon) */}
      <div 
        className={`hidden lg:block bg-[#330507] text-[#E5D5C5] text-[11px] border-b border-[#C5A059]/25 transition-all duration-300 ${
          isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-1.5 opacity-100'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-hotel-ivory-light">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>Rayapuram Main Road, Tiruppur - 641 601</span>
            </span>
            <span className="text-[#C5A059]/40">•</span>
            <a 
              href={`tel:${HOTEL_INFO.phonePrimary}`} 
              className="flex items-center gap-1.5 hover:text-[#DFC48B] transition-colors text-white font-medium"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>Reservations: {HOTEL_INFO.phonePrimary}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#DFC48B]">
              <Star className="w-3 h-3 fill-[#C5A059]" />
              <span className="font-semibold text-white">4.1 / 5</span>
              <span className="text-[#E5D5C5]/80">(2,036+ Google Reviews)</span>
            </span>
            <span className="text-[#C5A059]/40">•</span>
            <a
              href="https://wa.me/919443323300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#420608]/98 backdrop-blur-md shadow-luxury-lg border-b border-[#C5A059]/30 py-3'
            : 'bg-gradient-to-b from-[#2B0305]/95 via-[#420608]/85 to-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Brand Identity */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="h-10 sm:h-11 w-auto bg-white rounded-lg p-1.5 shadow-md flex items-center justify-center border border-[#C5A059]/50 transition-transform group-hover:scale-105">
                <img
                  src="/hotel_assets/images/logo.png"
                  alt="Hotel MKM Rich Official Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="block font-playfair text-lg sm:text-xl font-bold tracking-wider text-white leading-tight">
                  HOTEL MKM RICH
                </span>
                <span className="block text-[10px] tracking-[0.22em] text-[#DFC48B] font-semibold uppercase">
                  Tiruppur • 3-Star Hotel
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Properly spaced, single line, no overflow) */}
            <div className="hidden xl:flex items-center gap-5 2xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap flex-shrink-0 text-xs uppercase tracking-widest text-[#FAF6F0]/90 hover:text-[#DFC48B] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action Section */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              {/* Telephone Call Button */}
              <a
                href={`tel:${HOTEL_INFO.phonePrimary}`}
                className="hidden 2xl:flex items-center gap-1.5 whitespace-nowrap text-xs text-white hover:text-[#DFC48B] transition-colors px-3 py-2 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#58090C]/60"
                title="Call Front Desk Directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <span className="font-semibold tracking-wide whitespace-nowrap">{HOTEL_INFO.phonePrimary}</span>
              </a>

              {/* Compact Phone Icon Button for standard laptop screens (1280px-1500px) */}
              <a
                href={`tel:${HOTEL_INFO.phonePrimary}`}
                className="hidden md:flex 2xl:hidden items-center justify-center w-9 h-9 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#58090C]/60 text-white hover:text-[#DFC48B] transition-colors"
                title={`Call Front Desk: ${HOTEL_INFO.phonePrimary}`}
                aria-label="Call Front Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>

              {/* Regal Gold CTA Button */}
              <button
                onClick={onOpenBooking}
                className="whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C887] to-[#C5A059] text-[#330507] hover:text-[#200304] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#330507] flex-shrink-0" />
                <span className="whitespace-nowrap">Book Your Stay</span>
              </button>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors border border-[#C5A059]/30"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#DFC48B]" /> : <Menu className="w-5 h-5 text-[#DFC48B]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#380608] border-b border-[#C5A059]/40 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn mt-2">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#FAF6F0] hover:text-[#DFC48B] py-2 border-b border-[#58090C] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A059] text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#C5A059]/50 text-white text-xs font-semibold bg-[#4A0709]"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" /> 
                <span>Call Front Desk: {HOTEL_INFO.phonePrimary}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C887] to-[#C5A059] text-[#330507] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#330507]" /> 
                <span>Book Your Stay Now</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
