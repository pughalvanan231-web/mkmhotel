import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B0305] text-white border-t border-[#C5A059]/35">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#58090C]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-auto bg-white rounded-lg p-1.5 flex items-center justify-center border border-[#C5A059]/50 shadow-md">
                <img
                  src="/hotel_assets/images/logo.png"
                  alt="Hotel MKM Rich Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold tracking-wide text-white block">
                  HOTEL MKM RICH
                </span>
                <span className="text-xs text-[#DFC48B] uppercase tracking-widest font-semibold block">
                  3-Star Business & Leisure Hotel
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF6F0]/80 font-light leading-relaxed max-w-sm">
              An architectural landmark in Rayapuram, Tiruppur. 35 well-appointed guest rooms, dual dining with independent vegetarian and non-vegetarian kitchens, 24hr coffee bar, and comprehensive conference facilities.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href="https://twitter.com/hotelmkmrich"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#420608] flex items-center justify-center text-[#DFC48B] hover:text-white hover:bg-[#8F171B] transition-colors border border-[#C5A059]/35"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://www.facebook.com/pages/Hotel-MKM-Rich/715870981794940"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#420608] flex items-center justify-center text-[#DFC48B] hover:text-white hover:bg-[#8F171B] transition-colors border border-[#C5A059]/35 font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.google.com/maps/place/Hotel+MKM+Rich/@11.1044473,77.3300962,15.33z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#420608] flex items-center justify-center text-[#DFC48B] hover:text-white hover:bg-[#8F171B] transition-colors border border-[#C5A059]/35 font-bold"
                aria-label="Google"
              >
                G
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC48B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              <li><a href="#about" className="hover:text-[#DFC48B] transition-colors">About Property</a></li>
              <li><a href="#rooms" className="hover:text-[#DFC48B] transition-colors">Accommodations</a></li>
              <li><a href="#dining" className="hover:text-[#DFC48B] transition-colors">Dining & Rooftop</a></li>
              <li><a href="#events" className="hover:text-[#DFC48B] transition-colors">Banquets & Halls</a></li>
              <li><a href="#experiences" className="hover:text-[#DFC48B] transition-colors">Guest Amenities</a></li>
              <li><a href="#reviews" className="hover:text-[#DFC48B] transition-colors">Verified Reviews</a></li>
              <li><a href="#gallery" className="hover:text-[#DFC48B] transition-colors">Photo Gallery</a></li>
              <li><a href="#location" className="hover:text-[#DFC48B] transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Accommodations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC48B]">
              Room Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              {ROOMS.map(r => (
                <li key={r.id}>
                  <a href="#rooms" className="hover:text-[#DFC48B] transition-colors flex items-center justify-between">
                    <span>{r.name}</span>
                    <span className="text-xs text-[#DFC48B] font-semibold">₹{r.singlePrice}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC48B]">
              Contact & Reservations
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF6F0]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>No. 10, Rayapuram Main Road, Tiruppur - 641 601, Tamil Nadu</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <a href={`tel:${HOTEL_INFO.phonePrimary}`} className="hover:text-[#DFC48B]">
                  0421 223 3300 / 11 / 88 / 99
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#DFC48B]">
                  {HOTEL_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & EngineX Solutions Demo Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5D5C5]">
          <div>
            <p>© {new Date().getFullYear()} Hotel MKM Rich (P) Ltd. All rights reserved.</p>
            <p className="text-xs text-[#DFC48B]/90 mt-0.5">
              100% Original Property Photographs & Verified Hotel Information.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#420608] border border-[#C5A059]/40 text-white text-xs">
            <Sparkles className="w-3 h-3 text-[#DFC48B]" />
            <span>Hospitality Redesign Concept by <strong>EngineX Solutions</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
