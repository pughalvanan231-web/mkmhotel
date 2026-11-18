import React from 'react';
import { Star, Shield, MapPin, ArrowRight, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#2B0305]">
      {/* Background Image with Rich Royal Maroon & Crimson Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hotel_assets/sliderimages/select/homeslider/s1/reception1.jpg"
          alt="Hotel MKM Rich Grand Reception"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered luxury scrims in Royal Red and Gold shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B0305]/95 via-[#420608]/85 to-[#330507]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B0305] via-transparent to-[#2B0305]/75" />
        <div className="absolute inset-0 bg-[#720E12]/25 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 pt-36 pb-24 sm:py-36 lg:py-40 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl space-y-6 text-center lg:text-left">
          {/* Reputation Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-hotel-gold/40 text-hotel-ivory text-xs font-medium shadow-sm">
            <span className="flex items-center text-hotel-gold">
              <Star className="w-3.5 h-3.5 fill-hotel-gold" />
              <Star className="w-3.5 h-3.5 fill-hotel-gold" />
              <Star className="w-3.5 h-3.5 fill-hotel-gold" />
              <Star className="w-3.5 h-3.5 fill-hotel-gold" />
              <Star className="w-3.5 h-3.5 fill-hotel-gold/40" />
            </span>
            <span className="font-semibold text-white">{HOTEL_INFO.googleRating} / 5</span>
            <span className="text-hotel-gold-light">• {HOTEL_INFO.reviewCount.toLocaleString()}+ Google Reviews</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-hotel-gold-light">
              Welcome to Hotel MKM Rich • Tiruppur
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-playfair font-normal text-white leading-[1.12] tracking-tight">
              Experience Comfort.<br />
              <span className="italic font-light text-hotel-gold-light">Discover Hospitality.</span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#FAF6F0]/90 font-light leading-relaxed max-w-xl font-playfair italic">
            "{HOTEL_INFO.subheading}"
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-hotel-gold via-[#E5C887] to-hotel-gold hover:brightness-105 text-[#330507] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#330507]" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreRooms}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase border border-white/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Our Rooms</span>
            </button>
          </div>

          {/* Location & Feature Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-hotel-ivory-light/90">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-hotel-gold" />
              <span>Rayapuram, Tiruppur (5 mins from Station)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-hotel-gold" />
              <span>Dedicated Pure Veg & Non-Veg Kitchens</span>
            </div>
          </div>
        </div>

        {/* Floating Showcase Card for Real Hotel Feature */}
        <div className="hidden lg:block relative w-80 xl:w-96">
          <div className="relative rounded-2xl overflow-hidden border border-hotel-gold/30 shadow-luxury-lg bg-[#3D0608]/90 backdrop-blur-md p-3 group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/hotel_assets/sliderimages/select/rooms/s1/businesssuit.jpg"
                alt="Business Suite at MKM Rich"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#420608]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-hotel-gold font-medium uppercase tracking-wider border border-hotel-gold/30">
                Featured Suite
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-hotel-gold text-[#330507] px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
                From ₹4,000 / night
              </div>
            </div>
            <div className="p-3 text-left space-y-1">
              <h4 className="text-white font-playfair text-xl">Business Suite</h4>
              <p className="text-[#FAF6F0]/80 text-xs line-clamp-2">
                Lavish master bedroom with separate living discussion parlour, 2 LCD TVs, and executive desk.
              </p>
              <button
                onClick={onExploreRooms}
                className="text-xs text-hotel-gold hover:text-white font-medium flex items-center gap-1 pt-1 group-hover:underline"
              >
                View all 6 room categories <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-hero Bar with Hotel Statistics */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#330507]/95 backdrop-blur-md border-t border-hotel-gold/25 py-3 hidden md:block">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between text-xs text-hotel-ivory">
          <div className="flex items-center gap-2">
            <span className="text-hotel-gold font-bold text-sm">35</span>
            <span className="text-hotel-ivory-muted">Air-Conditioned Rooms & Suites</span>
          </div>
          <div className="h-3 w-px bg-hotel-gold/30" />
          <div className="flex items-center gap-2">
            <span className="text-hotel-gold font-bold text-sm">2</span>
            <span className="text-hotel-ivory-muted">Specialty Restaurants (Olives & Sky Grill)</span>
          </div>
          <div className="h-3 w-px bg-hotel-gold/30" />
          <div className="flex items-center gap-2">
            <span className="text-hotel-gold font-bold text-sm">24 Hrs</span>
            <span className="text-hotel-ivory-muted">The Lounge Coffee Shop & Patisserie</span>
          </div>
          <div className="h-3 w-px bg-hotel-gold/30" />
          <div className="flex items-center gap-2">
            <span className="text-hotel-gold font-bold text-sm">3</span>
            <span className="text-hotel-ivory-muted">Banquets & Conference Halls (Up to 250 Guests)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
