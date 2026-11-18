import React from 'react';
import { CheckCircle2, Compass, ArrowRight, Utensils, Building } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface AboutProps {
  onExploreRooms: () => void;
  onExploreDining: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreRooms, onExploreDining }) => {
  return (
    <section id="about" className="py-14 md:py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury-lg border border-[#C5A059]/40">
              <img
                src="/hotel_assets/sliderimages/select/homeslider/s1/over.jpg"
                alt="Hotel MKM Rich Exterior View in Rayapuram Tiruppur"
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0305]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#DFC48B] text-xs uppercase tracking-widest font-semibold block mb-1">
                  Rayapuram • Tiruppur
                </span>
                <p className="font-playfair text-xl sm:text-2xl font-normal leading-snug">
                  An architectural landmark in the textile capital of India.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card with Verified Image */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 w-56 rounded-xl overflow-hidden shadow-luxury border-2 border-white bg-white p-2">
              <img
                src="/hotel_assets/sliderimages/select/homeslider/s1/hall.jpg"
                alt="Banquet & Conference at MKM Rich"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-2 text-left">
                <p className="text-xs font-semibold text-[#720E12]">3 Conference Venues</p>
                <p className="text-[11px] text-[#736566]">Up to 250 delegates capacity</p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-5 -left-5 w-28 h-28 border-2 border-[#C5A059]/30 rounded-2xl -z-0" />
          </div>

          {/* Right Column: Editorial Hospitality Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A37E33] font-semibold block">
                About Hotel MKM Rich
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-playfair font-normal text-[#720E12] leading-tight">
                A Stay Designed Around Your Comfort.
              </h2>
            </div>

            <p className="text-[15px] sm:text-base text-[#1F1A1B] leading-relaxed font-light">
              Experience authentic hospitality with <strong className="font-semibold text-[#720E12]">Hotel MKM Rich</strong>, a premier 3-star business and leisure hotel located in the prominent commercial center of <strong className="font-semibold text-[#720E12]">Rayapuram, Tiruppur</strong>. We bring together thoughtful modern appointments, serene accommodations, and warm South Indian hospitality tailored for discerning corporate travelers and visiting families.
            </p>

            <p className="text-[15px] sm:text-base text-[#736566] leading-relaxed font-light">
              Featuring <strong className="font-semibold text-[#1F1A1B]">35 well-appointed guest rooms and suites</strong>, our property is widely recognized for our pioneering dual dining concept with completely independent vegetarian and non-vegetarian kitchens — ensuring absolute authenticity and peace of mind for every guest.
            </p>

            {/* Key Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#720E12]/15 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#720E12] font-semibold text-sm">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <span>Strategic Location</span>
                </div>
                <p className="text-xs text-[#736566] leading-relaxed">
                  Only 5 minutes from Tiruppur Railway Station and 45 minutes from Coimbatore Airport.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#720E12]/15 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#720E12] font-semibold text-sm">
                  <Utensils className="w-4 h-4 text-[#C5A059]" />
                  <span>Dual Culinary Purity</span>
                </div>
                <p className="text-xs text-[#736566] leading-relaxed">
                  Strictly separate veg and non-veg kitchens for Olives and Sky Grill Rooftop.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#720E12]/15 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#720E12] font-semibold text-sm">
                  <Building className="w-4 h-4 text-[#C5A059]" />
                  <span>3 Banquet Venues</span>
                </div>
                <p className="text-xs text-[#736566] leading-relaxed">
                  Diamond Ballroom, Spades Hall, and Aces Boardroom equipped with modern AV.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#720E12]/15 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#720E12] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>24-Hour Hospitality</span>
                </div>
                <p className="text-xs text-[#736566] leading-relaxed">
                  24-hour Lounge Coffee Shop, round-the-clock room service, and front desk assistance.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onExploreRooms}
                className="px-6 py-3 rounded-full bg-[#720E12] hover:bg-[#8F171B] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore Our Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#DFC48B]" />
              </button>

              <button
                onClick={onExploreDining}
                className="px-6 py-3 rounded-full bg-white hover:bg-[#F5EFE6] text-[#720E12] font-medium text-xs tracking-wider uppercase border border-[#C5A059]/40 transition-colors"
              >
                Discover Dining
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
